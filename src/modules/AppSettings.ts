const basicSize = 10;
const defaultCellState = false;

export const BoardSize = ['small', 'medium', 'large'] as const;

export type SizeNames = typeof BoardSize[number];

export type Settings = number;

export const GameSettings: Record<SizeNames, Settings> = {
  small: 11,
  medium: 21,
  large: 31,
};
