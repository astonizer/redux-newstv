import { SEARCH_FAIL } from '../types/feedTypes';

const initialState = {
	error: null,
};

export const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
