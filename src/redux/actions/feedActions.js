import { fetchNews } from '../../api';
import { SEARCH_BLOGS, SEARCH_FAIL, UPDATE_BLOGS } from '../types/feedTypes';

export const searchBlogs = query => async dispatch => {
	dispatch({ type: SEARCH_BLOGS, payload: query });

	try {
		const data = await fetchNews(query);
		dispatch({ type: UPDATE_BLOGS, payload: data });
	} catch (err) {
		dispatch({ type: SEARCH_FAIL, payload: err.message });
	}
};
