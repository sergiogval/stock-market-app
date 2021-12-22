import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import popularReducer from './popular/popular';
import companyReducer from './company/company';
import loserReducer from './losers/losers';
import gainerReducer from './gainers/gainers';

const reducer = combineReducers({
  popularReducer,
  companyReducer,
  loserReducer,
  gainerReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
