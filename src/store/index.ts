import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import playReducer, { played } from './playSliece';

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
    const speed = store.getState().play.speed;
    console.log(speed);
    clearInterval(timerId);
    timerId = window.setInterval(
      () => next(played(store.getState().play)),
      speed
    );
  } else if (action.type === 'play/paused') {
    clearInterval(timerId);
    next(action);
  } else if (action.type === 'play/cleared') {
    clearInterval(timerId);
    next(action);
  } else if (action.type === 'play/doneNext') {
    console.log(action);
    clearInterval(timerId);
    next(action);
  } else if (action.type === 'play/doneBefore') {
    clearInterval(timerId);
    next(action);
  } else if (action.type === 'play/changedSpeed') {
    console.log(action);
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
