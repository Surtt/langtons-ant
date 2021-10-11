export type Cell = false | true;
export type Line = Cell[];
export type Field = Line[];
export type Coords = [x: number, y: number];

export const generateField = (size: number, state: Cell): Field =>
  new Array<boolean[]>(size)
    .fill(new Array<boolean>(size))
    .map(() => new Array<boolean>(size).fill(state));

export const toggleCell = (field: Field, coords: Coords): Cell => {
  const [x, y] = coords;
  return (field[x][y] = !field[x][y]);
};
