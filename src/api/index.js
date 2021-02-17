import axios from 'axios';

const URL = 'https://newsapi.org/v2/everything?';

export const fetchNews = query =>
	axios.get(URL + `q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`);
