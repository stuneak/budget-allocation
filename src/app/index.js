import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './common/configureStore.js';
import Root from './Root.js';
import 'styles/general.js';

const root = document.createElement('div');
document.body.appendChild(root);

const history = createBrowserHistory();
const { store } = configureStore();

render(<Root store={store} history={history} />, root);
