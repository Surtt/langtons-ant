type Cell = false | true;
type Line = Cell[];
export type Field = Line[];

export const generateField = (size: number, state: Cell): Field =>
  new Array<boolean[]>(size)
    .fill(new Array<boolean>(size))
    .map(() => new Array<boolean>(size).fill(state));

// export const toggleCell = (cell: Cell, coords: Coords): Cell => { };
