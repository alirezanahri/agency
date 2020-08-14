import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

import {Provider} from 'react-redux';
import configureStore from './Store/store'
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore({});
ReactDOM.render(
  <Auth0Provider
  domain="dev--kwv2c6k.us.auth0.com"
  clientId="umV25CLTihB96bz5xWg8OvbP4C2lMjqp"
  redirectUri={window.location.origin}
>
  <Provider store={store}>
     <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
  </Provider>
  </Auth0Provider>,
  rootElement);

registerServiceWorker();

