import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const configureStore = () => {
       return createStore(reducers, applyMiddleware(thunk, logger));

  // return createStore(reducers);
};
export default configureStore;  