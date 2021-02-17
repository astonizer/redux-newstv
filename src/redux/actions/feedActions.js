import { fetchNews } from '../../api';
import { SEARCH_BLOGS, SEARCH_FAIL, UPDATE_BLOGS } from '../types/feedTypes';

export const searchBlogs = query => async dispatch => {
	dispatch({ type: SEARCH_BLOGS, payload: query });

	fetchNews(query)
		.then(res => {
			console.log(res);
			dispatch({ type: UPDATE_BLOGS, payload: res });
		})
		.catch(err => {
			dispatch({ type: SEARCH_FAIL, payload: err.message });
		});
};
