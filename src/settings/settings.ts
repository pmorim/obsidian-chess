export interface Settings {
  boardTheme: string;
  pieceSet: string;
  boardSize: number;
}

export const DEFAULT_SETTINGS: Settings = {
  boardTheme: 'blue',
  pieceSet: 'cburnett',
  boardSize: 360,
};
