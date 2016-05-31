import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from '../routes/routes';

// store
const store = configureStore();

// react-router-redux
const history = syncHistoryWithStore(hashHistory, store);

// routes
const routes = createRoutes(history);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
