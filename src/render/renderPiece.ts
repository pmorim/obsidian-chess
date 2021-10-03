import type { Settings } from '../settings';

export const renderPiece = (
  square: HTMLElement,
  settings: Settings,
  pieceCode: string
) => {
  // Build the piece
  const piecesPath = '../assets/piece-sets';
  const piecePath = `${piecesPath}/${settings.pieceSet}/${pieceCode}.svg`;
  const piece = document.createElement('img');
  piece.setAttribute('alt', pieceCode);
  //piece.setAttribute('src', require(piecePath) as string);

  // Center the piece in the square
  square.style.display = 'flex';
  square.style.alignItems = 'center';
  square.style.justifyContent = 'center';
};
