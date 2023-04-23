// == import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// == import components
import Chat from './components/Chat';

// == import store
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Chat />
  </Provider>
);
