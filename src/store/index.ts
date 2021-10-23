import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
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

import { reducer } from '@/slices/playSliece';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  undoable(reducer, {
    undoType: 'play/doneBefore',
    limit: 20,
  })
);

const store = configureStore({
  reducer: undoable(reducer, {
    undoType: 'play/doneBefore',
    limit: 20,
  }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const persistor = persistStore(store);

export { store };
