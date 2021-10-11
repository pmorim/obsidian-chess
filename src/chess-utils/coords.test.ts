import { getArrayIndex, boardCoords } from './coords';

test('convert 2D array coords to 1D array coords', () => {
  expect(getArrayIndex(0, 0)).toBe(0);
  expect(getArrayIndex(7, 0)).toBe(7);
  expect(getArrayIndex(0, 2)).toBe(16);
  expect(getArrayIndex(4, 6)).toBe(52);
});

test('convert Chess coords to 1D array coords', () => {
  expect(boardCoords('a8')).toBe(0);
  expect(boardCoords('h1')).toBe(63);
  expect(boardCoords('c7')).toBe(10);
  expect(boardCoords('f4')).toBe(37);
});
