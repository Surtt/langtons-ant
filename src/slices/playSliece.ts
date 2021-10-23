import {
  AnyAction,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { startGeneration } from '@/helpers/startGeneration';
import { Field, generateField } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';
import { generateAntPosition } from '@/helpers/Ant';
import { RootState } from '@/store';

const basicSize = 21;
const defaultCellState = false;
export interface InitState {
  field: Field;
  ant: Ant;
  count: number;
  speed: number;
  isPlayed: boolean;
}

export const getInitialState = (): InitState => {
  return {
    field: generateField(basicSize, defaultCellState),
    ant: generateAntPosition(0, basicSize, 0),
    count: 0,
    speed: 100,
    isPlayed: false,
  };
};

export const { reducer, actions } = createSlice({
  name: 'play',
  initialState: getInitialState(),
  reducers: {
    played: (state) => {
      const { field, ant, count, speed } = state;
      const final = startGeneration(field, ant, count);
      state.isPlayed = true;
      state.field = final.field;
      state.ant = final.ant;
      state.count = final.count;
      state.speed = speed;
    },
    paused: (state) => {
      const { field, ant, count } = state;
      state.isPlayed = false;
      state.field = field;
      state.ant = ant;
      state.count = count;
    },
    cleared: (state) => getInitialState(),
    doneNext: (state) => {
      const { field, ant, count } = state;
      const nextStep = startGeneration(field, ant, count);
      state.isPlayed = false;
      state.field = nextStep.field;
      state.ant = nextStep.ant;
      state.count = nextStep.count;
    },
    doneBefore: (state) => {
      state.isPlayed = false;
    },
    changedSpeed: (state, action: PayloadAction<number>) => {
      state.isPlayed = true;
      state.speed = action.payload;
    },
  },
});

export const recursiveGenerating = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => (dispatch, getState) =>
  setTimeout(() => {
    const { isPlayed } = getState().present;
    if (isPlayed) {
      dispatch(actions.played());
      dispatch(actions.changedSpeed(getState().present.speed));
      dispatch(recursiveGenerating());
    }
  }, getState().present.speed);
