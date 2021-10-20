import { changeAntState, newRotation, Ant } from './Ant';
import { Field, toggleCellOnTheField } from './Field';
export interface GeneratingValues {
  field: Field;
  ant: Ant;
  count: number;
}

const isFieldBorder = (field: Field, ant: Ant) => {
  const borderY = field.length - 1;
  const borderX = field[0].length - 1;
  return (
    ant.yAnt === 0 ||
    ant.yAnt === borderY ||
    ant.xAnt === 0 ||
    ant.xAnt === borderX
  );
};

export const startGeneration = (
  field: Field,
  ant: Ant,
  count: number
): GeneratingValues => {
  const cnt = count + 1;
  const { xAnt, yAnt, rotation } = ant;

  const movement = changeAntState(rotation, field[xAnt][yAnt]);
  const updateRotation = newRotation(rotation, field[xAnt][yAnt]);
  field = toggleCellOnTheField(field, [xAnt, yAnt]);
  movement.xAnt += xAnt;
  movement.yAnt += yAnt;
  const newAnt = {
    xAnt: movement.xAnt,
    yAnt: movement.yAnt,
    rotation: updateRotation,
  };

  if (isFieldBorder(field, ant)) {
    const length = field.length;
    field.unshift(new Array<boolean>(length).fill(false));
    field.push(new Array<boolean>(length).fill(false));
    field.forEach((item) => {
      item.unshift(false);
      item.push(false);
    });
    if (newAnt) {
      newAnt.xAnt++;
      newAnt.yAnt++;
    }
  }

  return {
    field: [...field],
    ant: newAnt,
    count: cnt,
  };
};
