import { changeAntState, newRotation, Ant } from './Ant';
import { Field } from './Field';

export const startGeneration = (field: Field, ant: Ant): Ant => {
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
