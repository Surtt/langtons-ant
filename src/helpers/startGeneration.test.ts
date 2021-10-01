import { startGeneration } from './startGeneration';
import { generateField } from './Field';

describe('Start generation', () => {
  it('Field 3X3 and ant', () => {
    const field = generateField(3, false);
    const ant = { xAnt: 1, yAnt: 1, rotation: 0 };
    expect(startGeneration(field, ant)).toStrictEqual({
      xAnt: 1,
      yAnt: 2,
      rotation: 90,
    });

    expect(field).toStrictEqual([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]);
  });

  it('Field 5X5 and ant', () => {
    const field = generateField(5, false);
    const ant = { xAnt: 3, yAnt: 3, rotation: 0 };
    expect(startGeneration(field, ant)).toStrictEqual({
      xAnt: 3,
      yAnt: 4,
      rotation: 90,
    });

    expect(field).toStrictEqual([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, true, false],
      [false, false, false, false, false],
    ]);
  });
});
