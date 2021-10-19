import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import playReducer, { cleared, doneNext, paused, played } from './playSliece';

// export const logger = (store) => (next) => (action) => {
//   console.log('dispatching', action);
//   console.log('before', store.getState());
//   const result = next(action);
//   console.log('after', store.getState());
//   return result;
// };

let timerId: number | undefined;
export const playMiddleware: Middleware = (store) => (next) => (
  action
): void => {
  if (action.type === 'play/played') {
    clearInterval(timerId);
    timerId = window.setInterval(
      () => next(played(store.getState().play)),
      1000
    );
  } else if (action.type === 'play/paused') {
    next(paused(store.getState().play));
    clearInterval(timerId);
  } else if (action.type === 'play/cleared') {
    clearInterval(timerId);
    next(cleared(store.getState().play));
  } else if (action.type === 'play/doneNext') {
    clearInterval(timerId);
    next(doneNext(store.getState().play));
  } else if (action.type === 'play/doneBefore') {
    clearInterval(timerId);
    next(action);
  }
};

export const store = configureStore({
  reducer: {
    play: playReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
