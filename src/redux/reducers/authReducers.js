import { AUTH_TOGGLE, UPDATE_USER_DATA } from '../types/authTypes';

// Auth store
const initialState = {
	isAuthenticated: false,
	userData: null,
};

/**
 *
 * @param {Object} state initial auth store
 * @param {Object} action store update type
 * @description updates the auth store
 * @returns new auth store.
 */
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_TOGGLE:
			return {
				...state,
				isAuthenticated: action.payload,
			};
		case UPDATE_USER_DATA:
			return {
				...state,
				userData: action.payload,
			};
		default:
			return state;
	}
};
