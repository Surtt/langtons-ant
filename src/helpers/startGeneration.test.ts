import { startGeneration } from './startGeneration';
import { generateField } from './Field';
import { InitState } from '@/slices/playSliece';

describe('Start generation', () => {
  it('Field 3X3 and ant', () => {
    const field = generateField(3, false);
    const ant = { xAnt: 1, yAnt: 1, rotation: 0 };
    const count = 0;
    const result = {
      field: [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ],
      ant: {
        xAnt: 1,
        yAnt: 2,
        rotation: 90,
      },
      count: 1,
    };
    expect(startGeneration(field, ant, count)).toStrictEqual(result);

    expect(field).toStrictEqual([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]);
  });

  it('Field 5X5 and ant', () => {
    const field = generateField(5, false);
    const ant = { xAnt: 3, yAnt: 3, rotation: 0 };
    const count = 2;
    const result = {
      field: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, true, false],
        [false, false, false, false, false],
      ],
      ant: {
        xAnt: 3,
        yAnt: 4,
        rotation: 90,
      },
      count: 3,
    };
    expect(startGeneration(field, ant, count)).toStrictEqual(result);

    expect(field).toStrictEqual([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, true, false],
      [false, false, false, false, false],
    ]);
  });

  it('Must be changed field size', () => {
    const field = new Array<boolean[]>(11)
      .fill(new Array<boolean>(11))
      .map(() => new Array<boolean>(11).fill(false));
    const ant = { xAnt: 10, yAnt: 10, rotation: 0 };
    const count = 0;
    field[10][11] = true;
    // const state = { field } as InitState;
    const result = startGeneration(field, ant, count);

    expect(result.field).toHaveLength(13);
    expect(result.field[0]).toHaveLength(13);
    expect(result.field[1]).toHaveLength(13);
    expect(result.field[11]).toHaveLength(14);
    expect(result.field[12]).toHaveLength(13);
    expect(result.field[11][12]).toBeTruthy();
    expect(result.field[12][13]).toBeFalsy();
    expect(result.ant).toEqual({ xAnt: 11, yAnt: 12, rotation: 90 });
  });
});
