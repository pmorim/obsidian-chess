export interface Settings {
  /**
   * The width and height of the board, in pixels
   */
  boardSize: string;
  /**
   * The colors of the board tiles
   */
  boardTheme: BoardTheme;
  /**
   * The style of the pieces
   */
  pieceSet: PieceSet;
  /**
   * Wether or not the board coordinates should be displayed
   */
  showCoords: boolean;
  /**
   * Workaround for linting purposes
   */
  [key: string]: any;
}

function getRecord(arr: readonly string[]) {
  return <Record<string, string>>(
    Object.fromEntries(arr.map((val: string) => [val, val]))
  );
}

export const BOARD_THEMES = ['blue', 'brown', 'green', 'ic', 'purple'] as const;
export const BOARD_THEMES_RECORD = getRecord(BOARD_THEMES);
export type BoardTheme = typeof BOARD_THEMES[number];

// TODO: generate this array by looking at the assets folder's names
export const PIECE_SETS = [
  'alpha',
  'california',
  'cardinal',
  'cburnett',
  'chess7',
  'chessnut',
  'companion',
  'dubrovny',
  'fantasy',
  'fresca',
  'gioco',
  'governor',
  'horsey',
  'icpieces',
  'kosal',
  'leipzig',
  'letter',
  'libra',
  'maestro',
  'merida',
  'pirouette',
  'pixel',
  'reillycraig',
  'riohacha',
  'shapes',
  'spatial',
  'staunty',
  'tatiana',
] as const;
export const PIECE_SETS_RECORD = getRecord(PIECE_SETS);
export type PieceSet = typeof PIECE_SETS[number];
