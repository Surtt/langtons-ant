import {
  AnyAction,
  createSlice,
  current,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { startGeneration } from '@/helpers/startGeneration';
import { Field, generateField } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';
import { generateAntPosition } from '@/helpers/Ant';
import { RootState } from '@/store';

const basicSize = 11;
const defaultCellState = false;

export interface InitState {
  field: Field;
  ant: Ant;
  count: number;
  speed: number;
  isPlayed: boolean;
}

// export const initialState: InitState = {
//   field: generateField(basicSize, defaultCellState),
//   ant: generateAntPosition(0, basicSize, 0),
//   count: 0,
//   speed: 100,
// };

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
    cleared: (state) => {
      console.log(current(state));
      const { field, ant, count, speed } = state;
      state.field = getInitialState().field;
      state.ant = getInitialState().ant;
      state.count = getInitialState().count;
      state.speed = getInitialState().speed;
      state.isPlayed = getInitialState().isPlayed;
      // console.log(current(state));
    },
    doneNext: (state) => {
      const { field, ant, count } = state;
      const nextStep = startGeneration(field, ant, count);
      state.field = nextStep.field;
      state.ant = nextStep.ant;
      state.count = nextStep.count;
    },
    doneBefore: (state, action: PayloadAction<InitState>) => {
      const { field, ant, count } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
    },
    changedSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
      console.log(current(state));
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
    const { isPlayed } = getState();
    if (isPlayed) {
      dispatch(actions.played());
      dispatch(actions.changedSpeed(getState().speed));
      dispatch(recursiveGenerating());
    }
  }, getState().speed);
