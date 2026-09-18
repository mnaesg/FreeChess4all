// Enkel sjakkmotor: minimax med alfa-beta-beskjæring og justerbar vanskelighetsgrad.
// Kjører helt lokalt i nettleseren. Ingen nettverkskall, ingen avhengigheter.

const PIECE_VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };

// Forenklede posisjonstabeller (rad 0 = 8. rad / rank8, rad 7 = 1. rad / rank1),
// basert på klassiske, fritt tilgjengelige "simplified evaluation" tabeller.
const PAWN_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [50, 50, 50, 50, 50, 50, 50, 50],
  [10, 10, 20, 30, 30, 20, 10, 10],
  [5, 5, 10, 25, 25, 10, 5, 5],
  [0, 0, 0, 20, 20, 0, 0, 0],
  [5, -5, -10, 0, 0, -10, -5, 5],
  [5, 10, 10, -20, -20, 10, 10, 5],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const KNIGHT_TABLE = [
  [-50, -40, -30, -30, -30, -30, -40, -50],
  [-40, -20, 0, 0, 0, 0, -20, -40],
  [-30, 0, 10, 15, 15, 10, 0, -30],
  [-30, 5, 15, 20, 20, 15, 5, -30],
  [-30, 0, 15, 20, 20, 15, 0, -30],
  [-30, 5, 10, 15, 15, 10, 5, -30],
  [-40, -20, 0, 5, 5, 0, -20, -40],
  [-50, -40, -30, -30, -30, -30, -40, -50],
];
const BISHOP_TABLE = [
  [-20, -10, -10, -10, -10, -10, -10, -20],
  [-10, 0, 0, 0, 0, 0, 0, -10],
  [-10, 0, 5, 10, 10, 5, 0, -10],
  [-10, 5, 5, 10, 10, 5, 5, -10],
  [-10, 0, 10, 10, 10, 10, 0, -10],
  [-10, 10, 10, 10, 10, 10, 10, -10],
  [-10, 5, 0, 0, 0, 0, 5, -10],
  [-20, -10, -10, -10, -10, -10, -10, -20],
];
const ROOK_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [5, 10, 10, 10, 10, 10, 10, 5],
  [-5, 0, 0, 0, 0, 0, 0, -5],
  [-5, 0, 0, 0, 0, 0, 0, -5],
  [-5, 0, 0, 0, 0, 0, 0, -5],
  [-5, 0, 0, 0, 0, 0, 0, -5],
  [-5, 0, 0, 0, 0, 0, 0, -5],
  [0, 0, 0, 5, 5, 0, 0, 0],
];
const QUEEN_TABLE = [
  [-20, -10, -10, -5, -5, -10, -10, -20],
  [-10, 0, 0, 0, 0, 0, 0, -10],
  [-10, 0, 5, 5, 5, 5, 0, -10],
  [-5, 0, 5, 5, 5, 5, 0, -5],
  [0, 0, 5, 5, 5, 5, 0, -5],
  [-10, 5, 5, 5, 5, 5, 0, -10],
  [-10, 0, 5, 0, 0, 0, 0, -10],
  [-20, -10, -10, -5, -5, -10, -10, -20],
];
const KING_TABLE = [
  [-30, -40, -40, -50, -50, -40, -40, -30],
  [-30, -40, -40, -50, -50, -40, -40, -30],
  [-30, -40, -40, -50, -50, -40, -40, -30],
  [-30, -40, -40, -50, -50, -40, -40, -30],
  [-20, -30, -30, -40, -40, -30, -30, -20],
  [-10, -20, -20, -20, -20, -20, -20, -10],
  [20, 20, 0, 0, 0, 0, 20, 20],
  [20, 30, 10, 0, 0, 10, 30, 20],
];
const TABLES = { p: PAWN_TABLE, n: KNIGHT_TABLE, b: BISHOP_TABLE, r: ROOK_TABLE, q: QUEEN_TABLE, k: KING_TABLE };

export const DIFFICULTIES = {
  easy: { depth: 1, randomMoveChance: 0.35, topMoveJitter: 60 },
  medium: { depth: 2, randomMoveChance: 0.08, topMoveJitter: 25 },
  hard: { depth: 3, randomMoveChance: 0, topMoveJitter: 0 },
};

function evaluateBoard(chess) {
  const board = chess.board();
  let score = 0;
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (!piece) continue;
      const table = TABLES[piece.type];
      const positional = piece.color === 'w' ? table[row][col] : table[7 - row][col];
      const material = PIECE_VALUES[piece.type];
      const value = material + positional;
      score += piece.color === 'w' ? value : -value;
    }
  }
  return score;
}

// Sorterer trekk slik at fangst-trekk vurderes først (raskere alfa-beta-beskjæring).
function orderMoves(moves) {
  return [...moves].sort((a, b) => {
    const aScore = a.captured ? PIECE_VALUES[a.captured] : 0;
    const bScore = b.captured ? PIECE_VALUES[b.captured] : 0;
    return bScore - aScore;
  });
}

function minimax(chess, depth, alpha, beta, maximizing) {
  if (depth === 0 || chess.isGameOver()) {
    return evaluateBoard(chess);
  }
  const moves = orderMoves(chess.moves({ verbose: true }));
  if (maximizing) {
    let best = -Infinity;
    for (const move of moves) {
      chess.move(move.san);
      best = Math.max(best, minimax(chess, depth - 1, alpha, beta, false));
      chess.undo();
      alpha = Math.max(alpha, best);
      if (alpha >= beta) break;
    }
    return best;
  }
  let best = Infinity;
  for (const move of moves) {
    chess.move(move.san);
    best = Math.min(best, minimax(chess, depth - 1, alpha, beta, true));
    chess.undo();
    beta = Math.min(beta, best);
    if (alpha >= beta) break;
  }
  return best;
}

/**
 * Finner et trekk for datamotstanderen.
 * @param {import('./vendor/chess.js').Chess} chess
 * @param {'easy'|'medium'|'hard'} difficultyKey
 * @returns {{san: string}|null}
 */
export function chooseAiMove(chess, difficultyKey) {
  const config = DIFFICULTIES[difficultyKey] || DIFFICULTIES.medium;
  const legalMoves = chess.moves({ verbose: true });
  if (legalMoves.length === 0) return null;

  if (Math.random() < config.randomMoveChance) {
    return legalMoves[Math.floor(Math.random() * legalMoves.length)];
  }

  const maximizing = chess.turn() === 'w';
  const scored = [];
  for (const move of orderMoves(legalMoves)) {
    chess.move(move.san);
    const score = minimax(chess, Math.max(config.depth - 1, 0), -Infinity, Infinity, !maximizing);
    chess.undo();
    scored.push({ move, score });
  }

  scored.sort((a, b) => (maximizing ? b.score - a.score : a.score - b.score));

  if (config.topMoveJitter > 0) {
    const bestScore = scored[0].score;
    const withinJitter = scored.filter((entry) => Math.abs(entry.score - bestScore) <= config.topMoveJitter);
    return withinJitter[Math.floor(Math.random() * withinJitter.length)].move;
  }

  return scored[0].move;
}
