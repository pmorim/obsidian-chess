import { readFEN } from './fen';
import { getArrayIndex, boardCoords } from './coords';

const isLightSquare = (i: number, j: number) =>
  (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0);
const isLastMove = (lastMove: string, index: number) =>
  boardCoords(lastMove.slice(0, 2)) === index ||
  boardCoords(lastMove.slice(2, 4)) === index;
const isCheck = (check: string, index: number) => boardCoords(check) === index;

export function buildBoard(fen: string, lastMove?: string, check?: string) {
  const fenBoard = readFEN(fen);
  const squares = new Array(64).fill(null);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const index = getArrayIndex(i, j);
      squares[index] = {
        variant: isLightSquare(i, j) ? 'light' : 'dark',
        pieceCode: fenBoard[index],
        isLastMove: lastMove ? isLastMove(lastMove, index) : false,
        isCheck: check ? isCheck(check, index) : false,
      };
    }
  }

  return squares;
}
