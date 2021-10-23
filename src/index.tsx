import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import './styles.css';

import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
