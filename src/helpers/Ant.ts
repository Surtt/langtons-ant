export type Coords = [number, number, number];

type RandomGenerator<R = number> = (
  min: number,
  max: number,
  rotation?: number
) => R;

type AntRotation = {
  rotation: number;
  direction: number;
};

export type Ant = {
  xAnt: number;
  yAnt: number;
  rotation: number;
};

const generateNumber: RandomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateAntPosition = (
  min: number,
  max: number,
  rotation = 0
): Ant => {
  const xAnt = generateNumber(min, max);
  const yAnt = generateNumber(min, max);
  return {
    xAnt,
    yAnt,
    rotation,
  };
};

export const changeAntState = (rotation: number, direction: number): Ant => {
  const value = { xAnt: 0, yAnt: 0, rotation: 0 };
  // const { rotation, direction } = antRotation;
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
  if (direction) {
    value.xAnt = -value.xAnt;
    value.yAnt = -value.yAnt;
  }
  return value;
};

export const newRotation = (rotation: number, direction: number): number => {
  // const { rotation, direction } = antRotation;
  let newRotation = rotation + 90;
  if (direction) {
    newRotation += 180;
  }
  if (newRotation >= 360) {
    newRotation -= 360;
  }
  return newRotation;
};
