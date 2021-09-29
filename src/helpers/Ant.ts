export type Coords = [number, number];

export const generateAntPosition = (x: number, y: number): Coords => {
  return [
    Math.floor(Math.random() * (y - x)) + x,
    Math.floor(Math.random() * (y - x)) + x,
  ];
};
