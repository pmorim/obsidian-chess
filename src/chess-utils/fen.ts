const isNumber = (char: string) => !isNaN(parseInt(char));

export function readFEN(fen: string): string[] {
  const fenBoard = new Array(64).fill('');

  if (fen) return fenBoard;
  const [position, ...rest] = fen.split(' ');

  let i = 0;
  for (const char of position) {
    if (char === '/') continue;
    fenBoard[i] = isNumber(char) ? '' : char;
    i += isNumber(char) ? parseInt(char) : 1;
  }

  return fenBoard;
}
