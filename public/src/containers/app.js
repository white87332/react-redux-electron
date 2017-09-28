import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import configureStore from '../store/configureStore';
import createRoutes from '../routes/routes';
import i18n from '../i18n/i18n';

// store
const store = configureStore();

// routes
const routes = createRoutes();

hydrate(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            {routes}
        </I18nextProvider>
    </Provider>,
	document.getElementById('root')
);
