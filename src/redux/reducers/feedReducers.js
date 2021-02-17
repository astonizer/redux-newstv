import { UPDATE_BLOGS, UPDATE_SEARCH_INPUT } from '../types/authTypes';

// Feed Store
const initialState = {
	searchInput: 'farmer',
	blogs: null,
};

/**
 *
 * @param {Object} state initial auth store
 * @param {Object} action store update type
 * @description updates the feed store
 * @returns new feed store.
 */
export const feedReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCH_INPUT:
			return {
				...state,
				searchInput: action.payload,
			};
		case UPDATE_BLOGS:
			return {
				...state,
				blogs: action.payload,
			};
		default:
			return state;
	}
};
