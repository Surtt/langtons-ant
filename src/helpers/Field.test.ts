import { generateField } from './Field';

describe('Generating Field', () => {
  it('Field 2X2', () => {
    expect(generateField(2, false)).toStrictEqual([
      [false, false],
      [false, false],
    ]);
  });

  it('Field 3X3', () => {
    expect(generateField(3, false)).toStrictEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });
});
