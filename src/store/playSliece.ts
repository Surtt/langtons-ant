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
};

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    played: (state, action: PayloadAction<initState>) => {
      console.log(action);
      const { field, ant, count } = action.payload;
      const newField = cloneDeep(field);
      const newAnt = cloneDeep(ant);
      const final = startGeneration(newField, newAnt, count);
      return { ...state, ...final };
    },
    paused: (state, action: PayloadAction<initState>) => {
      console.log(action);
      return state;
    },
    cleared: (state, action: PayloadAction<initState>) => {
      console.log(action);
      return { ...state, ...initialState };
    },
    doneNext: (state, action: PayloadAction<initState>) => {
      console.log(action);
      const { field, ant, count } = action.payload;
      const newField = cloneDeep(field);
      const newAnt = cloneDeep(ant);
      const nextStep = startGeneration(newField, newAnt, count);
      return { ...state, ...nextStep };
    },
    doneBefore: (state, action: PayloadAction<initState>) => {
      console.log(action);
      return { ...state, ...action.payload };
    },
  },
});

export const {
  played,
  paused,
  cleared,
  doneNext,
  doneBefore,
} = playSlice.actions;
export default playSlice.reducer;
