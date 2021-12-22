import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import popularReducer from './popular/popular';
import companyReducer from './company/company';
import loserReducer from './losers/losers';

const reducer = combineReducers({
  popularReducer,
  companyReducer,
  loserReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
