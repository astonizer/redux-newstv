import { LOGIN_USER, LOGOUT_USER } from '../types/authTypes';

export const loginUser = userData => async dispatch => {
	dispatch({ type: LOGIN_USER, payload: userData });
};

export const logoutUser = () => async dispatch => {
	dispatch({ type: LOGOUT_USER });
};
