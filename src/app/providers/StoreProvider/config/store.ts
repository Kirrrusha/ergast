import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {$api} from '~shared/api/api';
import {driverSliceReducer, driversSliceReducer} from '~entities/Driver';
import {StateSchema, ThunkExtraArg} from './StateSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducers = combineReducers({
  drivers: driversSliceReducer,
  driver: driverSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export function createReduxStore(initialState?: StateSchema) {
  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
