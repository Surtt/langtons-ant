import { Action } from 'redux';
import {
  InitState,
  initialState,
  rootReducer,
  played,
  paused,
  cleared,
  doneNext,
  doneBefore,
  changedSpeed,
} from './playSliece';

describe('reducer', () => {
  let prevState: InitState;
  beforeAll(() => {
    return (prevState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 1, rotation: 0 },
      count: 0,
      speed: 100,
    });
  });
  test('should initialise with InitState Interface', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual as InitState).toBeTruthy();
  });

  test('initial state must have a field definition', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual).toHaveProperty('field');
  });

  test('initial state must have an ant definition', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual).toHaveProperty('ant');
  });

  test('initial state must have a count definition', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual).toHaveProperty('count');
  });

  test('initial state must have a speed definition', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual).toHaveProperty('speed');
  });

  test('must have state by default', () => {
    const MockInitState: InitState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 0, yAnt: 0, rotation: 0 },
      count: 0,
      speed: 100,
    };
    const actual = rootReducer(MockInitState, {} as Action);
    expect(actual).toBeTruthy();
  });

  test('initial state must have a (11 x 11 x false) field', () => {
    const actual = rootReducer(undefined, {} as Action);
    expect(actual.field).toEqual(
      new Array<boolean[]>(11)
        .fill(new Array<boolean>(11))
        .map(() => new Array<boolean>(11).fill(false))
    );
  });

  test('must be played', () => {
    const expectedState: InitState = {
      field: [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 2, rotation: 90 },
      count: 1,
      speed: 100,
    };
    const nextState = rootReducer(prevState, played(prevState));
    expect(nextState).toEqual(expectedState);
  });

  test('must be paused', () => {
    // const prevState = {
    //   field: [
    //     [false, false, false],
    //     [false, false, false],
    //     [false, false, false],
    //   ],
    //   ant: { xAnt: 1, yAnt: 1, rotation: 0 },
    //   count: 0,
    //   speed: 100,
    // };
    const expectedState: InitState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 1, rotation: 0 },
      count: 0,
      speed: 100,
    };
    const nextState = rootReducer(prevState, paused(prevState));
    expect(nextState).toEqual(expectedState);
  });

  test('must be doneNext', () => {
    // const prevState = {
    //   field: [
    //     [false, false, false],
    //     [false, false, false],
    //     [false, false, false],
    //   ],
    //   ant: { xAnt: 1, yAnt: 1, rotation: 0 },
    //   count: 0,
    //   speed: 100,
    // };
    const expectedState: InitState = {
      field: [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 2, rotation: 90 },
      count: 1,
      speed: 100,
    };
    const nextState = rootReducer(prevState, doneNext(prevState));
    expect(nextState).toEqual(expectedState);
  });

  test('must be doneBefore', () => {
    // const prevState = {
    //   field: [
    //     [false, false, false],
    //     [false, false, false],
    //     [false, false, false],
    //   ],
    //   ant: { xAnt: 1, yAnt: 1, rotation: 0 },
    //   count: 0,
    //   speed: 100,
    // };
    const expectedState: InitState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 1, rotation: 0 },
      count: 0,
      speed: 100,
    };
    const nextState = rootReducer(prevState, doneBefore(prevState));
    expect(nextState).toEqual(expectedState);
  });

  test('must be changedSpeed', () => {
    const prevState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 1, rotation: 0 },
      count: 0,
      speed: 100,
    };
    const expectedState: InitState = {
      field: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      ant: { xAnt: 1, yAnt: 1, rotation: 0 },
      count: 0,
      speed: 60,
    };
    const nextState = rootReducer(prevState, changedSpeed(60));
    expect(nextState).toEqual(expectedState);
  });
  // test('must be cleared', () => {
  //   const prevState = {
  //     field: [
  //       [false, false, false],
  //       [false, false, false],
  //       [false, false, false],
  //     ],
  //     ant: { xAnt: 1, yAnt: 1, rotation: 0 },
  //     count: 0,
  //     speed: 100,
  //   };

  //   const expectedState: InitState = {
  //     field: [
  //       [false, false, false],
  //       [false, false, false],
  //       [false, false, false],
  //     ],
  //     ant: { xAnt: 1, yAnt: 1, rotation: 0 },
  //     count: 0,
  //     speed: 100,
  //   };
  //   const nextState = rootReducer(prevState, cleared());
  //   expect(nextState).toEqual(expectedState);
  // });
});
