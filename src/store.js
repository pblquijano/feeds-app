import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from './modules/main/reducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const composeEnhancers =
        window.__REDUX_VEDTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );

    if (module.hot) {
        module.hot.accept('./modules/main/reducer', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store;
}
