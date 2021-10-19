import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';
import { initState, startGeneration } from '@/helpers/startGeneration';
import { generateField } from '@/helpers/Field';
import { generateAntPosition } from '@/helpers/Ant';
import cloneDeep from 'lodash/clonedeep';

const basicSize = 11;
const defaultCellState = false;

const initialState: initState = {
  field: generateField(basicSize, defaultCellState),
  ant: generateAntPosition(0, basicSize, 0),
  count: 0,
  speed: 100,
};

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    played: (state, action: PayloadAction<initState>) => {
      // console.log(action);
      const { field, ant, count, speed } = action.payload;
      const newField = cloneDeep(field);
      const newAnt = cloneDeep(ant);
      const final = startGeneration(newField, newAnt, count);
      state.field = final.field;
      state.ant = final.ant;
      state.count = final.count;
      state.speed = speed;
      // console.log(current(state));
    },
    paused: (state, action: PayloadAction<initState>) => {
      console.log(action.payload);
      const { field, ant, count, speed } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
      state.speed = speed;
      console.log(current(state));
    },
    cleared: (state, action: PayloadAction<initState>) => {
      console.log(action);
      console.log(current(state));
      state.field = initialState.field;
      state.ant = initialState.ant;
      state.count = initialState.count;
      state.speed = initialState.speed;
      console.log(current(state));
    },
    doneNext: (state, action: PayloadAction<initState>) => {
      console.log(action);
      const { field, ant, count, speed } = action.payload;
      const newField = cloneDeep(field);
      const newAnt = cloneDeep(ant);
      const nextStep = startGeneration(newField, newAnt, count);
      // return { ...state, ...nextStep };
      state.field = nextStep.field;
      state.ant = nextStep.ant;
      state.count = nextStep.count;
      state.speed = speed;
      console.log(current(state));
    },
    doneBefore: (state, action: PayloadAction<initState>) => {
      console.log(action);
      const { field, ant, count, speed } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
      state.speed = speed;
      console.log(current(state));
    },
    changedSpeed: (state, action: PayloadAction<initState>) => {
      console.log(action.payload);
      const { field, ant, count, speed } = action.payload;
      state.field = field;
      state.ant = ant;
      state.count = count;
      state.speed = speed;
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
export default playSlice.reducer;
