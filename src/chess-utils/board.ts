import { readFEN } from './fen';

const boardCoords = (i: number, j: number) => i + 8 * j;

export function buildBoard(fen: string, lastMove: string, size: number) {
  const fenBoard = readFEN(fen);
  const squares = new Array(64).fill(null);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares[boardCoords(i, j)] = {
        size: size / 8,
        pieceCode: fenBoard[boardCoords(i, j)],
        isLightSquare:
          (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0),
      };
    }
  }

  return squares;
}
