import { readFEN } from './fen';

const getArrayIndex = (i: number, j: number) => i + 8 * j;
const isLightSquare = (i: number, j: number) =>
  (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0);

export function buildBoard(fen: string, lastMove?: string, check?: string) {
  const fenBoard = readFEN(fen);
  const squares = new Array(64).fill(null);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares[getArrayIndex(i, j)] = {
        pieceCode: fenBoard[getArrayIndex(i, j)],
        isLight: isLightSquare(i, j),
      };
    }
  }

  return squares;
}
