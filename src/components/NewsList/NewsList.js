import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import News from './News/News';

function NewsList() {
	const news = useSelector(state => state.feed.news);
	const [newsDetails, setNewsDetails] = useState();

	useEffect(() => {
		setNewsDetails(news);
	}, [news]);

	return (
		<div>
			{newsDetails ? (
				newsDetails.data.articles.map(article => {
					return <News description={article.description} />;
				})
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

export default NewsList;
