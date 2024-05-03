import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import { Loader } from './common/components';
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
