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

let timerId: number | undefined;
export const playMiddleware: Middleware = (store, dispatch) => (next) => (
  action
): void => {
  switch (action.type) {
    case 'play/played': {
      const speed = store.getState().speed;
      clearInterval(timerId);
      timerId = window.setInterval(() => next(action), speed);
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
