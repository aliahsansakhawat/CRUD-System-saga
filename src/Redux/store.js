
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { firstReducer } from "./Reducers/firstReducer";
import rootSaga from "./saga";

// 1. Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// 2. Combine reducers
const rootReducers = combineReducers({
  users: firstReducer
});

// 3. Create the store with the reducer and middleware
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

// 4. Run the root saga
sagaMiddleware.run(rootSaga);

// 5. Export the store
export default store;
