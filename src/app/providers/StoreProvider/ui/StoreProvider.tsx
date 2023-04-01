import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from '../config/store';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from '../config/StateSchema';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {children, initialState} = props;

  const store = createReduxStore(initialState as StateSchema);

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
