import { combineReducers } from 'redux';

import { authReducer } from './authReducers';
import { feedReducer } from './feedReducers';

/**
 * reducers are assigned to corresponding global store variables
 * @type {Object}
 */
export default combineReducers({
	auth: authReducer,
	feed: feedReducer,
});
