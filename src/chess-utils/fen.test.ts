import { isNumber, readFEN } from './fen';

describe('FEN Codes', () => {
  it('is number or not', () => {
    // Special FEN char
    const specialChar = '/';
    expect(isNumber(specialChar)).toBeFalsy();

    // Test piece codes
    const whitePieces = ['K', 'Q', 'R', 'B', 'N', 'P'];
    const blackPieces = whitePieces.map((piece) => piece.toLowerCase());
    const allPieces = whitePieces.concat(blackPieces);
    allPieces.forEach((piece) => expect(isNumber(piece)).toBeFalsy());

    // Test numbers
    const digits = Array.from({ length: 10 }, (_, i) => i.toString());
    digits.forEach((digit) => expect(isNumber(digit)).toBeTruthy());
  });

  it.skip('builds FEN board correctly', () => {});
});
