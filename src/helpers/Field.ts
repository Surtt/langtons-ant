import { changeAntState, newRotation, Ant } from './Ant';

type Cell = false | true;
type Line = Cell[];
type Field = Line[];

export const generateField = (size: number, state: Cell): Field =>
  new Array<boolean[]>(size)
    .fill(new Array<boolean>(size))
    .map(() => new Array<boolean>(size).fill(state));

// export const toggleCell = (cell: Cell, coords: Coords): Cell => { };

export const startGeneration = (field: number[][], ant: Ant): Ant => {
  const { xAnt, yAnt, rotation } = ant;

  const movement = changeAntState(rotation, field[xAnt][yAnt]);
  const updateRotation = newRotation(rotation, field[xAnt][yAnt]);
  field[xAnt][yAnt] = !field[xAnt][yAnt];
  movement.xAnt += xAnt;
  movement.yAnt += yAnt;
  const newAnt = {
    xAnt: movement.xAnt,
    yAnt: movement.yAnt,
    rotation: updateRotation,
  };

  return newAnt;
};
