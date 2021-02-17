import { LOGIN_USER, LOGOUT_USER } from '../types/authTypes';

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
		case LOGIN_USER:
			return {
				...state,
				isAuthenticated: true,
				userData: action.payload,
			};
		case LOGOUT_USER:
			return {
				...state,
				isAuthenticated: false,
				userData: null,
			};
		default:
			return state;
	}
};
