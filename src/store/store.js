import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as reducer from './reducers';

import { combineReducers } from 'redux-immutable';

import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware(rootSaga);
const rootReducer = combineReducers({
	...reducer
});

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
