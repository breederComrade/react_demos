import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as reducer from './reducers';
import rootSaga from './sagas/saga';
const sagaMiddleware = createSagaMiddleware(rootSaga);

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(combineReducers({ ...reducer }), composeEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
