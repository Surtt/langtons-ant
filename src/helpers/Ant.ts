import { Cell } from '@/helpers/Field';
export type Coords = [number, number];

type RandomGenerator<R = number> = (
  min: number,
  max: number,
  rotation?: number
) => R;

export type Ant = {
  xAnt: number;
  yAnt: number;
  rotation: number;
};

export const generateNumber: RandomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateAntPosition: RandomGenerator<Ant> = (
  min: number,
  max: number,
  rotation = 0
) => {
  const xAnt = generateNumber(min, max);
  const yAnt = generateNumber(min, max);
  return {
    xAnt,
    yAnt,
    rotation,
  };
};

export const changeAntState = (
  rotation: number,
  cell: Cell
): {
  xAnt: number;
  yAnt: number;
} => {
  const value = { xAnt: 0, yAnt: 0 };
  switch (rotation) {
    case 90:
      value.xAnt++;
      break;
    case 180:
      value.yAnt--;
      break;
    case 270:
      value.xAnt--;
      break;
    default:
      value.yAnt++;
      break;
  }
  if (cell) {
    value.xAnt = -value.xAnt;
    value.yAnt = -value.yAnt;
  }
  return value;
};

export const newRotation = (rotation: number, cell: Cell): number => {
  let newRotation = rotation + 90;
  if (cell) {
    newRotation += 180;
  }
  if (newRotation >= 360) {
    newRotation -= 360;
  }
  return newRotation;
};
