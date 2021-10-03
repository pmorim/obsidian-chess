import type { Settings } from '../settings';
import { renderSquare } from './renderSquare';

export function renderBoard(
  parentEl: HTMLElement,
  settings: Settings,
  fen?: string
) {
  // Instance the board element
  const board = document.createElement('div');
  parentEl.appendChild(board);

  // Style the board
  const boardSizePixels = `${settings.boardSize}px`;
  board.style.width = boardSizePixels;
  board.style.height = boardSizePixels;
  board.style.display = 'flex';
  board.style.flexWrap = 'wrap';

  // Render the squares and pieces
  const squareSize = settings.boardSize / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const pieceCode = 'wK';
      renderSquare(board, squareSize, [i, j], settings, pieceCode);
    }
  }

  return board;
}
