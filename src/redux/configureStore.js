import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import popularReducer from './popular/popular';

const reducer = combineReducers({
  popularReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
  )

export default store;