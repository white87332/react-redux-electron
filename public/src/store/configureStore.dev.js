import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import { persistState } from 'redux-devtools';
import DevTools from '../components/devTools/devTools';

export default function configureStore(initialState)
{
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument(),
            persistState(
                window.location.href.match(
                    /[?&]debug_session=([^&]+)\b/
                )
            )
        )
    );

    if (module.hot)
    {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () =>
        {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
}
