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

// let timerId: number | undefined;
// export const intervalUpdate = createAsyncThunk(
//   'play/updateState',
//   (state, { dispatch, getState }) => {
//     if (!timerId) {
//       console.log(dispatch(state));
//       timerId = window.setInterval(
//         () => dispatch(played(getState().play)),
//         1000
//       );
//       return state;
//     }

//     if (timerId) {
//       clearInterval(timerId);
//       timerId = undefined;
//       return state;
//     }
//   }
// );

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    played: (state, action: PayloadAction<initState>) => {
      console.log(action);
      const { field, ant, count } = action.payload;
      const newField = cloneDeep(field);
      const final = startGeneration(newField, ant, count);
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
      const nextStep = startGeneration(newField, ant, count);
      return { ...state, ...nextStep };
    },
    doneBefore: (state, action: PayloadAction<initState>) => {
      console.log(action);
      // const { field, ant, count } = action.payload;
      // const newField = cloneDeep(field);
      // const beforeStep = startGeneration(newField, ant, count);
      return { ...state, ...action.payload };
      // return { ...state, ...action.payload };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(intervalUpdate.fulfilled, (state, action) => {
  //     console.log(action.payload);
  //     // console.log(state);
  //     state = action.payload;
  //   });
  // },
});

export const {
  played,
  paused,
  cleared,
  doneNext,
  doneBefore,
} = playSlice.actions;
export default playSlice.reducer;
