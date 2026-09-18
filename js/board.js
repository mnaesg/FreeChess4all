// Tilgjengelig, tastaturvennlig sjakkbrett-UI.
// Bruker Unicode-sjakktegn (ingen bilder/kostnad) og ARIA-grid-mønster med "roving tabindex".

import { t } from './i18n.js';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

const GLYPHS = {
  w: { p: '♙', n: '♘', b: '♗', r: '♖', q: '♕', k: '♔' },
  b: { p: '♟', n: '♞', b: '♝', r: '♜', q: '♛', k: '♚' },
};

export class ChessBoardUI {
  constructor({ container, lang, onSquareActivate }) {
    this.container = container;
    this.lang = lang;
    this.onSquareActivate = onSquareActivate;
    this.orientation = 'w';
    this.squareButtons = new Map();
    this.focusedSquare = 'e1';
    this._buildGrid();
  }

  setLanguage(lang) {
    this.lang = lang;
  }

  setOrientation(color) {
    this.orientation = color === 'b' ? 'b' : 'w';
    this._buildGrid();
  }

  _orderedCoords() {
    const files = this.orientation === 'w' ? FILES : [...FILES].reverse();
    const ranks = this.orientation === 'w' ? RANKS : [...RANKS].reverse();
    return { files, ranks };
  }

  _buildGrid() {
    this.container.innerHTML = '';
    this.container.setAttribute('role', 'grid');
    this.squareButtons.clear();

    const { files, ranks } = this._orderedCoords();

    ranks.forEach((rank) => {
      const row = document.createElement('div');
      row.setAttribute('role', 'row');
      row.className = 'board-row';

      files.forEach((file) => {
        const square = `${file}${rank}`;
        const isLight = (FILES.indexOf(file) + RANKS.indexOf(rank)) % 2 === 0;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'gridcell');
        btn.dataset.square = square;
        btn.className = `square ${isLight ? 'light' : 'dark'}`;
        btn.tabIndex = -1;

        const glyph = document.createElement('span');
        glyph.className = 'piece-glyph';
        glyph.setAttribute('aria-hidden', 'true');
        btn.appendChild(glyph);

        btn.addEventListener('click', () => this._activate(square));
        btn.addEventListener('keydown', (event) => this._onKeyDown(event, square));

        row.appendChild(btn);
        this.squareButtons.set(square, btn);
      });

      this.container.appendChild(row);
    });

    this._syncTabIndex();
  }

  _syncTabIndex() {
    this.squareButtons.forEach((btn, square) => {
      btn.tabIndex = square === this.focusedSquare ? 0 : -1;
    });
  }

  _activate(square) {
    this.focusedSquare = square;
    this._syncTabIndex();
    this.onSquareActivate(square);
  }

  _onKeyDown(event, square) {
    const { files, ranks } = this._orderedCoords();
    const fileIdx = files.indexOf(square[0]);
    const rankIdx = ranks.indexOf(square[1]);
    let nextFileIdx = fileIdx;
    let nextRankIdx = rankIdx;

    switch (event.key) {
      case 'ArrowRight':
        nextFileIdx = Math.min(fileIdx + 1, 7);
        break;
      case 'ArrowLeft':
        nextFileIdx = Math.max(fileIdx - 1, 0);
        break;
      case 'ArrowUp':
        nextRankIdx = Math.max(rankIdx - 1, 0);
        break;
      case 'ArrowDown':
        nextRankIdx = Math.min(rankIdx + 1, 7);
        break;
      case 'Home':
        nextFileIdx = 0;
        break;
      case 'End':
        nextFileIdx = 7;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this._activate(square);
        return;
      default:
        return;
    }

    event.preventDefault();
    const nextSquare = `${files[nextFileIdx]}${ranks[nextRankIdx]}`;
    this.focusedSquare = nextSquare;
    this._syncTabIndex();
    this.squareButtons.get(nextSquare).focus();
  }

  focusSquare(square) {
    const btn = this.squareButtons.get(square);
    if (btn) {
      this.focusedSquare = square;
      this._syncTabIndex();
      btn.focus();
    }
  }

  /**
   * Lar en brikke gli visuelt fra "from" til "to" etter at render() allerede
   * har tegnet det ferdige resultatet. Hopper over animasjonen hvis brukeren
   * har bedt om redusert bevegelse.
   * @param {{from: string, to: string, color: 'w'|'b', piece: string}} move
   */
  animateMove(move) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fromBtn = this.squareButtons.get(move.from);
    const toBtn = this.squareButtons.get(move.to);
    if (!fromBtn || !toBtn) return;

    const boardRect = this.container.getBoundingClientRect();
    const fromRect = fromBtn.getBoundingClientRect();
    const toRect = toBtn.getBoundingClientRect();
    const fromStyle = window.getComputedStyle(fromBtn);

    const ghost = document.createElement('span');
    ghost.className = 'piece-ghost';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.textContent = GLYPHS[move.color][move.piece];
    ghost.style.width = `${fromRect.width}px`;
    ghost.style.height = `${fromRect.height}px`;
    ghost.style.fontSize = fromStyle.fontSize;
    ghost.style.color = fromStyle.color;
    ghost.style.transform = `translate(${fromRect.left - boardRect.left}px, ${fromRect.top - boardRect.top}px)`;
    this.container.appendChild(ghost);

    const dx = toRect.left - fromRect.left;
    const dy = toRect.top - fromRect.top;

    requestAnimationFrame(() => {
      ghost.style.transform = `translate(${fromRect.left - boardRect.left + dx}px, ${fromRect.top - boardRect.top + dy}px)`;
    });

    const cleanup = () => ghost.remove();
    ghost.addEventListener('transitionend', cleanup, { once: true });
    window.setTimeout(cleanup, 400);
  }

  /**
   * Tegner brettet på nytt basert på nåværende tilstand.
   * @param {import('./vendor/chess.js').Chess} chess
   * @param {{selected?: string, legalTargets?: string[], lastMove?: {from:string,to:string}, kingInCheckSquare?: string}} state
   */
  render(chess, state = {}) {
    const { selected, legalTargets = [], lastMove, kingInCheckSquare } = state;

    this.squareButtons.forEach((btn, square) => {
      const piece = chess.get(square);
      const glyphEl = btn.querySelector('.piece-glyph');

      btn.classList.remove('selected', 'legal-target', 'last-move', 'in-check', 'capture-target');
      glyphEl.textContent = piece ? GLYPHS[piece.color][piece.type] : '';

      let label = square;
      if (piece) {
        const colorKey = piece.color === 'w' ? 'board.white' : 'board.black';
        label = `${square}, ${t(this.lang, colorKey)} ${t(this.lang, `piece.${piece.type}`)}`;
      } else {
        label = `${square}, ${t(this.lang, 'board.empty')}`;
      }
      btn.setAttribute('aria-label', label);
      btn.setAttribute('aria-selected', square === selected ? 'true' : 'false');

      if (square === selected) btn.classList.add('selected');
      if (legalTargets.includes(square)) {
        btn.classList.add('legal-target');
        if (piece) btn.classList.add('capture-target');
      }
      if (lastMove && (square === lastMove.from || square === lastMove.to)) {
        btn.classList.add('last-move');
      }
      if (square === kingInCheckSquare) {
        btn.classList.add('in-check');
      }
    });
  }
}

/**
 * Viser en tilgjengelig dialog for bondeforvandling og returnerer valgt brikketype.
 * @param {HTMLDialogElement} dialogEl
 * @param {'w'|'b'} color
 * @param {string} lang
 * @returns {Promise<'q'|'r'|'b'|'n'>}
 */
export function promptPromotion(dialogEl, color, lang) {
  return new Promise((resolve) => {
    const list = dialogEl.querySelector('.promotion-options');
    list.innerHTML = '';
    const options = ['q', 'r', 'b', 'n'];

    options.forEach((type) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'promotion-choice';
      btn.textContent = `${GLYPHS[color][type]} ${t(lang, `promotion.${{ q: 'queen', r: 'rook', b: 'bishop', n: 'knight' }[type]}`)}`;
      btn.addEventListener('click', () => {
        dialogEl.close();
        resolve(type);
      });
      list.appendChild(btn);
    });

    dialogEl.showModal();
    list.querySelector('button').focus();
  });
}
