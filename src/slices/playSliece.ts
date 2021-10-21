import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { startGeneration } from '@/helpers/startGeneration';
import { Field, generateField } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';
import { generateAntPosition } from '@/helpers/Ant';
import cloneDeep from 'lodash/clonedeep';

const basicSize = 11;
const defaultCellState = false;

export interface InitState {
  field: Field;
  ant: Ant;
  count: number;
  speed: number;
}

export const initialState: InitState = {
  field: generateField(basicSize, defaultCellState),
  ant: generateAntPosition(0, basicSize, 0),
  count: 0,
  speed: 100,
};

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    played: (state) => {
      const { field, ant, count } = state;
      // const newField = cloneDeep(field);
      // const newAnt = cloneDeep(ant);
      const final = startGeneration(field, ant, count);
      state.field = final.field;
      state.ant = final.ant;
      state.count = final.count;
      // console.log(current(state));
    },
    paused: (state, action: PayloadAction<InitState>) => {
      const { field, ant, count } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
      console.log(current(state));
    },
    cleared: (state) => {
      console.log(current(state));
      state.field = initialState.field;
      state.ant = initialState.ant;
      state.count = initialState.count;
      state.speed = initialState.speed;
      console.log(current(state));
    },
    doneNext: (state, action: PayloadAction<InitState>) => {
      const { field, ant, count } = action.payload;
      const newField = cloneDeep(field);
      // const newAnt = cloneDeep(ant);
      const nextStep = startGeneration(newField, ant, count);
      state.field = nextStep.field;
      state.ant = nextStep.ant;
      state.count = nextStep.count;
      console.log(current(state));
    },
    doneBefore: (state, action: PayloadAction<InitState>) => {
      const { field, ant, count } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
      console.log(current(state));
    },
    changedSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
      console.log(current(state));
    },
  },
});

export const {
  played,
  paused,
  cleared,
  doneNext,
  doneBefore,
  changedSpeed,
} = playSlice.actions;
export const rootReducer = playSlice.reducer;
