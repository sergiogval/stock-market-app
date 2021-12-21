import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import popularReducer from './popular/popular';
import companyReducer from './company/company';

const reducer = combineReducers({
  popularReducer,
  companyReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
  )

export default store;