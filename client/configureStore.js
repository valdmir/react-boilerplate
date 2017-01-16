import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState, window) {
    const middleware = [thunkMiddleware];
    let store;
    if (__DEVELOPMENT__) {
        store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(...middleware),
                typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
            )
        );
    } else {
        store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
    }

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
