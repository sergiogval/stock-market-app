import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import popularReducer from './popular/popular';
import compayReducser from './company/company';

const reducer = combineReducers({
  popularReducer,
  compayReducser,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
  )

export default store;