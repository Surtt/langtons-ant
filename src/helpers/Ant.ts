export type Coords = [number, number];
type RandomGenerator<R = number> = (min: number, max: number) => R;

const generateNumber: RandomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateAntPosition: RandomGenerator<Coords> = (min, max) => {
  const xPosition = generateNumber(min, max);
  const yPosition = generateNumber(min, max);
  return [xPosition, yPosition];
};

// export const changeAntCoords = (x: number, y: number): Coords => { };
