import { Action } from 'redux';
import { InitState, reducer, actions, recursiveGenerating } from './playSliece';
import { StateWithHistory } from 'redux-undo';

describe('Play reducer', () => {
  const prevState: InitState = {
    field: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    ant: { xAnt: 1, yAnt: 1, rotation: 0 },
    count: 0,
    speed: 100,
    isPlayed: false,
  };

  describe('Check InitState Interface', () => {
    it('should initialise with InitState Interface', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual as InitState).toBeTruthy();
    });

    it('initial state must have a field definition', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual).toHaveProperty('field');
    });

    it('initial state must have an ant definition', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual).toHaveProperty('ant');
    });

    it('initial state must have a count definition', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual).toHaveProperty('count');
    });

    it('initial state must have a speed definition', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual).toHaveProperty('speed');
    });

    it('must have state by default', () => {
      const MockInitState: InitState = {
        field: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        ant: { xAnt: 0, yAnt: 0, rotation: 0 },
        count: 0,
        speed: 100,
        isPlayed: false,
      };
      const actual = reducer(MockInitState, {} as Action);
      expect(actual).toBeTruthy();
    });

    it('initial state must have a (11 x 11 x false) field', () => {
      const actual = reducer(undefined, {} as Action);
      expect(actual.field).toEqual(
        new Array<boolean[]>(21)
          .fill(new Array<boolean>(21))
          .map(() => new Array<boolean>(21).fill(false))
      );
    });
  });

  describe('Check actions', () => {
    it('must be played', () => {
      const expectedState: InitState = {
        field: [
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ],
        ant: { xAnt: 1, yAnt: 2, rotation: 90 },
        count: 1,
        speed: 100,
        isPlayed: true,
      };
      const nextState = reducer(prevState, actions.played());
      expect(nextState).toEqual(expectedState);
    });

    it('must be paused', () => {
      const expectedState: InitState = {
        field: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        ant: { xAnt: 1, yAnt: 1, rotation: 0 },
        count: 0,
        speed: 100,
        isPlayed: false,
      };
      const nextState = reducer(prevState, actions.paused());
      expect(nextState).toEqual(expectedState);
    });

    it('must be doneNext', () => {
      const expectedState: InitState = {
        field: [
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ],
        ant: { xAnt: 1, yAnt: 2, rotation: 90 },
        count: 1,
        speed: 100,
        isPlayed: false,
      };
      const nextState = reducer(prevState, actions.doneNext());
      expect(nextState).toEqual(expectedState);
    });

    it('must be doneBefore', () => {
      const expectedState: InitState = {
        field: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        ant: { xAnt: 1, yAnt: 1, rotation: 0 },
        count: 0,
        speed: 100,
        isPlayed: false,
      };
      const nextState = reducer(prevState, actions.doneBefore());
      expect(nextState).toEqual(expectedState);
    });

    it('must be changedSpeed', () => {
      const expectedState: InitState = {
        field: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        ant: { xAnt: 1, yAnt: 1, rotation: 0 },
        count: 0,
        speed: 60,
        isPlayed: true,
      };
      const nextState = reducer(prevState, actions.changedSpeed(60));
      expect(nextState).toEqual(expectedState);
    });
    it('must be cleared', () => {
      const nextState = reducer(prevState, actions.cleared());
      expect(nextState).toEqual(
        expect.objectContaining({
          count: 0,
          speed: 100,
          isPlayed: false,
        })
      );
      expect(nextState.field).toHaveLength(21);
      expect(nextState.ant.rotation).toBe(0);
    });
  });

  describe('Check async actions', () => {
    it('Check action recursiveGenerating with true value', () => {
      jest.useFakeTimers();
      const mockDispatch = jest.fn();
      recursiveGenerating()(
        mockDispatch,
        () =>
          ({
            present: {
              isPlayed: true,
            },
          } as StateWithHistory<InitState>),
        undefined
      );
      jest.advanceTimersByTime(100);
      expect(mockDispatch).toHaveBeenCalledTimes(3);
    });
    it('Check action recursiveGenerating with false value', () => {
      jest.useFakeTimers();
      const mockDispatch = jest.fn();
      recursiveGenerating()(
        mockDispatch,
        () =>
          ({
            present: {
              isPlayed: false,
            },
          } as StateWithHistory<InitState>),
        undefined
      );
      jest.advanceTimersByTime(100);
      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
