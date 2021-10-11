import {
  generateNumber,
  generateAntPosition,
  changeAntState,
  newRotation,
} from './Ant';

describe('Check generating random coords', () => {
  it('Coords are less than 5', () => {
    expect(generateNumber(4, 4)).toBeGreaterThanOrEqual(2);
  });
  it('Coords are at least 5', () => {
    expect(generateNumber(4, 4)).toBeLessThan(5);
  });
});

describe('Check ant position', () => {
  it('Coords are less than 5', () => {
    expect(generateAntPosition(1, 1, 90)).toStrictEqual({
      xAnt: 1,
      yAnt: 1,
      rotation: 90,
    });
  });
  it('Coords are at least 5', () => {
    expect(generateNumber(4, 4)).toBeLessThan(5);
  });
});

describe('Changing ant state', () => {
  it('Check rotation and ant position with false', () => {
    expect(changeAntState(0, false)).toStrictEqual({
      xAnt: 0,
      yAnt: 1,
    });
    expect(changeAntState(90, false)).toStrictEqual({
      xAnt: 1,
      yAnt: 0,
    });
    expect(changeAntState(180, false)).toStrictEqual({
      xAnt: 0,
      yAnt: -1,
    });
    expect(changeAntState(270, false)).toStrictEqual({
      xAnt: -1,
      yAnt: 0,
    });
    expect(newRotation(0, false)).toStrictEqual(90);
    expect(newRotation(90, false)).toStrictEqual(180);
    expect(newRotation(180, false)).toStrictEqual(270);
    expect(newRotation(270, false)).toStrictEqual(0);
  });

  it('Check rotation and ant position with true', () => {
    expect(changeAntState(0, true)).toStrictEqual({
      xAnt: -0,
      yAnt: -1,
    });
    expect(changeAntState(90, true)).toStrictEqual({
      xAnt: -1,
      yAnt: -0,
    });
    expect(changeAntState(180, true)).toStrictEqual({
      xAnt: -0,
      yAnt: 1,
    });
    expect(changeAntState(270, true)).toStrictEqual({
      xAnt: 1,
      yAnt: -0,
    });
    expect(newRotation(0, true)).toStrictEqual(270);
    expect(newRotation(90, true)).toStrictEqual(0);
    expect(newRotation(180, true)).toStrictEqual(90);
    expect(newRotation(270, true)).toStrictEqual(180);
  });
});
