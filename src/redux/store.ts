import { combineReducers, legacy_createStore } from 'redux';

import userEventsReducer from './user-events';
import recorderReducer from './recorder';

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer);

export default store;
