import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from '../routes/routes';
import DevTools from '../components/devTools/devTools';

// store
const store = configureStore();

// react-router-redux
const history = syncHistoryWithStore(hashHistory, store);

// routes
const routes = createRoutes(history);

render(
	<Provider store={store}>
		<div>
			{routes}
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
