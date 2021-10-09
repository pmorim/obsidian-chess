export const getArrayIndex = (i: number, j: number) => i + 8 * j;

export function boardCoords(coord: string) {
  const i = coord[0].charCodeAt(0) - 'a'.charCodeAt(0);
  const j = 8 - parseInt(coord[1], 10);

  return getArrayIndex(i, j);
}
