import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import userEventsReducer from './user-events';
import recorderReducer from './recorder';

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
