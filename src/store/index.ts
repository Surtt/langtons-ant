import { played } from '@/slices/playSliece';
import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { rootReducer } from '@/slices/playSliece';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
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
  // if (action.type === 'play/played') {
  //   const speed = store.getState().speed;
  //   clearInterval(timerId);
  //   timerId = window.setInterval(() => next(played(store.getState())), speed);
  // } else if (action.type === 'play/paused') {
  //   clearInterval(timerId);
  //   next(action);
  // } else if (action.type === 'play/cleared') {
  //   clearInterval(timerId);
  //   next(action);
  // } else if (action.type === 'play/doneNext') {
  //   console.log(action);
  //   clearInterval(timerId);
  //   next(action);
  // } else if (action.type === 'play/doneBefore') {
  //   clearInterval(timerId);
  //   next(action);
  // } else if (action.type === 'play/changedSpeed') {
  //   console.log(action);
  //   next(action);
  // }
  // return next(action);

  switch (action.type) {
    case 'play/played': {
      const speed = store.getState().speed;
      clearInterval(timerId);
      timerId = window.setInterval(() => next(played(store.getState())), speed);
      break;
    }
    case 'play/paused':
      clearInterval(timerId);
      next(action);
      break;
    case 'play/cleared':
      clearInterval(timerId);
      next(action);
      break;
    case 'play/doneNext':
      clearInterval(timerId);
      next(action);
      break;
    case 'play/doneBefore':
      clearInterval(timerId);
      next(action);
      break;
    case 'play/changedSpeed':
      next(action);
      break;
    default:
      return next(action);
  }
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(playMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
