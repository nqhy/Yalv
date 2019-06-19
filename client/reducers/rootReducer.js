import { combineReducers } from 'redux';

import auth from './authenticate';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
