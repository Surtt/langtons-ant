import { changeAntState, newRotation, Ant } from './Ant';
import { Field, toggleCellOnTheField } from './Field';

export interface initState {
  field: Field;
  ant: Ant;
  count: number;
}

export const startGeneration = (
  field: Field,
  ant: Ant,
  count: number
): initState => {
  const cnt = count + 1;
  const { xAnt, yAnt, rotation } = ant;

  const movement = changeAntState(rotation, field[xAnt][yAnt]);
  const updateRotation = newRotation(rotation, field[xAnt][yAnt]);
  // field[xAnt][yAnt] = !field[xAnt][yAnt];
  field = toggleCellOnTheField(field, [xAnt, yAnt]);
  // toggleCellOnTheField(field, [xAnt, yAnt]);
  // console.log(toggleCellOnTheField(field, [xAnt, yAnt]));
  movement.xAnt += xAnt;
  movement.yAnt += yAnt;
  const newAnt = {
    xAnt: movement.xAnt,
    yAnt: movement.yAnt,
    rotation: updateRotation,
  };

  return {
    field: [...field],
    ant: newAnt,
    count: cnt,
  };
};
