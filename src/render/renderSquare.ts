import type { Settings } from '../settings';
import { renderPiece } from './renderPiece';

const isLightSquare = ([i, j]: [number, number]) =>
  (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0);

export function renderSquare(
  board: HTMLElement,
  size: number,
  coords: [number, number],
  settings: Settings,
  pieceCode?: string
) {
  // Instance the board element
  const square = document.createElement('div');
  board.appendChild(square);

  // * Temporary definition of the theme
  const lightSquareColor = 'rgb(232, 235, 239)';
  const darkSquareColor = 'rgb(125, 135, 150)';

  // Style the square
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.backgroundColor = isLightSquare(coords)
    ? lightSquareColor
    : darkSquareColor;

  // Render the piece if there is one
  if (pieceCode) {
    renderPiece(square, settings, pieceCode);
  }

  return square;
}
