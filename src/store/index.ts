import { Action, configureStore } from '@reduxjs/toolkit';
import playReducer, {
  cleared,
  doneBefore,
  doneNext,
  paused,
  played,
} from './playSliece';

export const logger = (store) => (next) => (action) => {
  // console.log('dispatching', action);
  console.log('before', store.getState());
  const result = next(action);
  console.log('after', store.getState());
  // console.log(result);
  return result;
};

let timerId: number | undefined;
export const playMiddleware = (store) => (next) => (action: Action): void => {
  // if (!timerId) {
  //   console.log(action);
  //   timerId = window.setInterval(
  //     () => next(played(store.getState().play)),
  //     1000
  //   );
  //   return next(action);
  // }
  // if (timerId) {
  //   // next(paused(store.getState().play));
  //   clearInterval(timerId);
  //   timerId = undefined;
  //   // return next(paused(store.getState().play));
  //   // return next(action);
  // }
  // if (action.type === 'play/cleared') {
  //   console.log(action.type);
  //   next(cleared(store.getState().play));
  //   clearInterval(timerId);
  //   return next(action);
  // }
  // return next(action);
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
    // console.log(store.getState());
    console.log(action);
    clearInterval(timerId);
    // next(doneBefore(store.getState().play));
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
