import axios from 'axios';

const URL = 'https://gnews.io/api/v4/search?';

export const fetchNews = query =>
	axios.get(URL + `q=${query}&token=${process.env.REACT_APP_GNEWS_API}`);
