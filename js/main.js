import { Chess } from './vendor/chess.js';
import { chooseAiMove } from './ai.js';
import { ChessBoardUI, promptPromotion } from './board.js';
import { applyTranslations, detectDefaultLanguage, setStoredLanguage, t, tf } from './i18n.js';

const SETTINGS_KEY = 'schoolchess.settings';

function loadSettings() {
  const defaults = { difficulty: 'medium', playerColor: 'w', soundOn: true, showHints: true };
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { ...defaults, ...stored };
  } catch (_e) {
    return defaults;
  }
}

function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (_e) {
    // Innstillinger lagres ikke hvis localStorage er blokkert – spillet fungerer likevel.
  }
}

const settings = loadSettings();
let lang = detectDefaultLanguage();

const chess = new Chess();
let selectedSquare = null;
let legalTargets = [];
let lastMove = null;
let aiThinking = false;
let audioCtx = null;

const els = {
  board: document.getElementById('board'),
  statusLive: document.getElementById('status-live'),
  alertLive: document.getElementById('alert-live'),
  newGameBtn: document.getElementById('new-game-btn'),
  undoBtn: document.getElementById('undo-btn'),
  colorSelect: document.getElementById('color-select'),
  difficultySelect: document.getElementById('difficulty-select'),
  soundToggle: document.getElementById('sound-toggle'),
  hintsToggle: document.getElementById('hints-toggle'),
  langToggle: document.getElementById('lang-toggle'),
  promotionDialog: document.getElementById('promotion-dialog'),
  gameOverDialog: document.getElementById('game-over-dialog'),
  gameOverHeading: document.getElementById('game-over-heading'),
  gameOverMessage: document.getElementById('game-over-message'),
  confettiContainer: document.getElementById('confetti-container'),
  playAgainBtn: document.getElementById('play-again-btn'),
  moveHistory: document.getElementById('move-history'),
};

const boardUI = new ChessBoardUI({
  container: els.board,
  lang,
  onSquareActivate: handleSquareActivate,
});

function playTone(frequency, durationMs) {
  if (!settings.soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = frequency;
    osc.type = 'sine';
    gain.gain.value = 0.06;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + durationMs / 1000);
  } catch (_e) {
    // Lyd er valgfritt – ignorer hvis Web Audio ikke er tilgjengelig.
  }
}

function announce(message, { assertive = false } = {}) {
  const el = assertive ? els.alertLive : els.statusLive;
  el.textContent = '';
  // Liten forsinkelse sikrer at skjermlesere fanger opp endringen selv om teksten er lik forrige.
  window.setTimeout(() => {
    el.textContent = message;
  }, 30);
}

function pieceColorLabel(color) {
  return t(lang, color === 'w' ? 'controls.color.white' : 'controls.color.black');
}

function findKingSquare(color) {
  const board = chess.board();
  for (let r = 0; r < 8; r += 1) {
    for (let c = 0; c < 8; c += 1) {
      const cell = board[r][c];
      if (cell && cell.type === 'k' && cell.color === color) return cell.square;
    }
  }
  return null;
}

function currentCheckSquare() {
  if (!chess.inCheck()) return null;
  return findKingSquare(chess.turn());
}

function render() {
  boardUI.render(chess, {
    selected: selectedSquare,
    legalTargets: settings.showHints ? legalTargets : [],
    lastMove,
    kingInCheckSquare: currentCheckSquare(),
  });
  renderMoveHistory();
}

function renderMoveHistory() {
  const sanMoves = chess.history();
  els.moveHistory.innerHTML = '';

  if (sanMoves.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'move-history-empty';
    empty.textContent = t(lang, 'moveHistory.empty');
    els.moveHistory.appendChild(empty);
    return;
  }

  for (let i = 0; i < sanMoves.length; i += 2) {
    const row = document.createElement('div');
    row.className = 'move-row';
    if (i === sanMoves.length - 1 || i === sanMoves.length - 2) {
      row.classList.add('current-move');
    }

    const number = document.createElement('span');
    number.className = 'move-number';
    number.textContent = `${i / 2 + 1}.`;

    const white = document.createElement('span');
    white.className = 'move-white';
    white.textContent = sanMoves[i] || '';

    const black = document.createElement('span');
    black.className = 'move-black';
    black.textContent = sanMoves[i + 1] || '';

    row.append(number, white, black);
    els.moveHistory.appendChild(row);
  }

  els.moveHistory.scrollTop = els.moveHistory.scrollHeight;
}

function describeMove(move, color) {
  const pieceName = t(lang, `piece.${move.piece}`);
  const colorLabel = pieceColorLabel(color);
  let text;
  if (move.flags.includes('k')) {
    text = tf(lang, 'move.castleKing', { color: colorLabel });
  } else if (move.flags.includes('q')) {
    text = tf(lang, 'move.castleQueen', { color: colorLabel });
  } else if (move.captured) {
    text = tf(lang, 'move.capture', {
      color: colorLabel,
      piece: pieceName,
      from: move.from,
      to: move.to,
      capturedPiece: t(lang, `piece.${move.captured}`),
    });
  } else {
    text = tf(lang, 'move.normal', { color: colorLabel, piece: pieceName, from: move.from, to: move.to });
  }
  if (move.promotion) {
    text += tf(lang, 'move.promotion', { newPiece: t(lang, `piece.${move.promotion}`) });
  }
  return text;
}

const CONFETTI_COLORS = ['#e63946', '#f1c40f', '#2a9d8f', '#4a90d9', '#f4a261', '#9b5de5'];
let confettiIntervalId = null;

function spawnConfettiBurst(count = 70) {
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    // Hver konfettibit fjerner seg selv når dens egen animasjon er ferdig,
    // slik at gjentatte "drysser" ikke hoper seg opp i DOM-en.
    piece.addEventListener('animationend', () => piece.remove());
    els.confettiContainer.appendChild(piece);
  }
}

// Fortsetter å "dryss" konfetti helt til seiersskjermen lukkes - en skikkelig feiring.
function startConfettiCelebration() {
  stopConfettiCelebration();
  spawnConfettiBurst();
  confettiIntervalId = window.setInterval(() => spawnConfettiBurst(), 1500);
}

function stopConfettiCelebration() {
  if (confettiIntervalId !== null) {
    window.clearInterval(confettiIntervalId);
    confettiIntervalId = null;
  }
  els.confettiContainer.innerHTML = '';
}

function showGameOverOverlay(kind) {
  els.gameOverHeading.textContent = t(lang, `gameover.${kind}.heading`);
  els.gameOverMessage.textContent = t(lang, `gameover.${kind}.message`);

  if (kind === 'win' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    startConfettiCelebration();
  }

  els.gameOverDialog.showModal();
}

function checkGameOverAndAnnounce() {
  if (!chess.isGameOver()) return false;

  if (chess.isCheckmate()) {
    const loserColor = chess.turn();
    const playerWon = loserColor !== settings.playerColor;
    announce(t(lang, playerWon ? 'status.checkmateWin' : 'status.checkmateLose'), { assertive: true });
    playTone(playerWon ? 660 : 220, 400);
    showGameOverOverlay(playerWon ? 'win' : 'lose');
  } else if (chess.isStalemate()) {
    announce(t(lang, 'status.stalemate'), { assertive: true });
    showGameOverOverlay('draw');
  } else if (chess.isDraw()) {
    announce(t(lang, 'status.draw'), { assertive: true });
    showGameOverOverlay('draw');
  }
  return true;
}

async function applyMove(moveInput) {
  const moverColor = chess.turn();
  const move = chess.move(moveInput);
  if (!move) return null;

  lastMove = { from: move.from, to: move.to };
  render();
  boardUI.animateMove({ from: move.from, to: move.to, color: moverColor, piece: move.piece });
  playTone(move.captured ? 300 : 440, 120);

  let message = describeMove(move, moverColor);
  const gameOver = checkGameOverAndAnnounce();
  if (!gameOver && chess.inCheck()) {
    message += ` ${t(lang, 'status.check')}`;
    playTone(500, 200);
  }
  if (!gameOver) announce(message);
  return move;
}

async function maybeTriggerAiMove() {
  if (chess.isGameOver()) return;
  if (chess.turn() === settings.playerColor) return;

  aiThinking = true;
  setControlsDisabled(true);
  announce(t(lang, 'status.thinking'));

  await new Promise((resolve) => window.setTimeout(resolve, 350));

  const aiMove = chooseAiMove(chess, settings.difficulty);
  aiThinking = false;
  setControlsDisabled(false);

  if (aiMove) {
    await applyMove({ from: aiMove.from, to: aiMove.to, promotion: aiMove.promotion });
  }

  if (!chess.isGameOver() && chess.turn() === settings.playerColor) {
    announce(t(lang, 'status.yourTurn'));
  }
}

function setControlsDisabled(disabled) {
  els.board.querySelectorAll('button').forEach((btn) => {
    btn.disabled = disabled;
  });
  els.newGameBtn.disabled = disabled;
  els.undoBtn.disabled = disabled;
}

async function handleSquareActivate(square) {
  if (aiThinking || chess.isGameOver()) return;
  if (chess.turn() !== settings.playerColor) return;

  const piece = chess.get(square);

  if (selectedSquare === square) {
    selectedSquare = null;
    legalTargets = [];
    render();
    return;
  }

  if (legalTargets.includes(square)) {
    const movesForSquare = chess.moves({ square: selectedSquare, verbose: true });
    const candidate = movesForSquare.find((m) => m.to === square);
    let promotion;
    if (candidate && candidate.promotion) {
      promotion = await promptPromotion(els.promotionDialog, settings.playerColor, lang);
    }
    const fromSquare = selectedSquare;
    selectedSquare = null;
    legalTargets = [];
    const move = await applyMove({ from: fromSquare, to: square, promotion });
    if (move) {
      boardUI.focusSquare(square);
      await maybeTriggerAiMove();
    }
    return;
  }

  if (piece && piece.color === settings.playerColor) {
    selectedSquare = square;
    legalTargets = chess.moves({ square, verbose: true }).map((m) => m.to);
    render();
    announce(t(lang, 'status.selectDestination'));
    return;
  }

  if (selectedSquare) {
    announce(t(lang, 'status.invalidMove'));
  }
  selectedSquare = null;
  legalTargets = [];
  render();
}

function newGame() {
  if (els.gameOverDialog.open) els.gameOverDialog.close();
  chess.reset();
  selectedSquare = null;
  legalTargets = [];
  lastMove = null;
  boardUI.setOrientation(settings.playerColor);
  render();
  announce(t(lang, 'status.newGameStarted'));
  maybeTriggerAiMove();
}

function undoMove() {
  if (aiThinking) return;
  const history = chess.history();
  if (history.length === 0) return;

  chess.undo();
  if (chess.turn() !== settings.playerColor && chess.history().length > 0) {
    chess.undo();
  }
  selectedSquare = null;
  legalTargets = [];
  lastMove = null;
  render();
  announce(t(lang, 'status.moveUndone'));
}

function applyLanguage(nextLang) {
  lang = nextLang;
  setStoredLanguage(lang);
  applyTranslations(lang);
  boardUI.setLanguage(lang);
  render();
}

function initControls() {
  els.colorSelect.value = settings.playerColor;
  els.difficultySelect.value = settings.difficulty;
  els.soundToggle.checked = settings.soundOn;
  els.hintsToggle.checked = settings.showHints;

  els.newGameBtn.addEventListener('click', () => {
    settings.playerColor = els.colorSelect.value;
    settings.difficulty = els.difficultySelect.value;
    saveSettings(settings);
    newGame();
  });

  els.undoBtn.addEventListener('click', undoMove);

  els.soundToggle.addEventListener('change', () => {
    settings.soundOn = els.soundToggle.checked;
    saveSettings(settings);
  });

  els.hintsToggle.addEventListener('change', () => {
    settings.showHints = els.hintsToggle.checked;
    saveSettings(settings);
    render();
  });

  els.langToggle.addEventListener('click', () => {
    applyLanguage(lang === 'nb' ? 'en' : 'nb');
    els.langToggle.textContent = t(lang, 'lang.toggle');
  });

  els.playAgainBtn.addEventListener('click', () => {
    newGame();
  });

  // Stopp konfettien uansett hvordan seiersskjermen lukkes (knapp, Escape, osv.).
  els.gameOverDialog.addEventListener('close', stopConfettiCelebration);
}

function init() {
  applyTranslations(lang);
  initControls();
  els.langToggle.textContent = t(lang, 'lang.toggle');
  boardUI.setOrientation(settings.playerColor);
  render();
  announce(t(lang, 'status.yourTurn'));
  if (settings.playerColor === 'b') {
    maybeTriggerAiMove();
  }
}

init();
