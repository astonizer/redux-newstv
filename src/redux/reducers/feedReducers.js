import { SEARCH_BLOGS, UPDATE_BLOGS } from '../types/feedTypes';

// Feed Store
const initialState = {
	searchInput: 'farmer',
	loading: true,
	news: null,
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
		case SEARCH_BLOGS:
			return {
				...state,
				searchInput: action.payload,
				loading: true,
			};
		case UPDATE_BLOGS:
			return {
				...state,
				loading: false,
				blogs: action.payload,
			};
		default:
			return state;
	}
};
