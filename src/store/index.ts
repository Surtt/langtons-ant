import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import { reducer } from '@/slices/playSliece';

const store = configureStore({
  reducer: undoable(reducer, {
    undoType: 'play/doneBefore',
    limit: 20,
  }),
});

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState().present));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
