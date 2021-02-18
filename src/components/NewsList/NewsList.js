import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CircularProgress, Grid } from '@material-ui/core';

import { useStyles } from './styles';

import News from './News/News';

function NewsList() {
	const news = useSelector(state => state.feed.news);
	const classes = useStyles();
	const [newsDetails, setNewsDetails] = useState();

	useEffect(() => {
		setNewsDetails(news);
	}, [news]);

	return (
		<Grid
			className={classes.root}
			container
			justify="center"
			spacing={0}
			alignItems="center"
		>
			{newsDetails ? (
				newsDetails.data.articles.map((article, id) => {
					return <News key={id} article={article} />;
				})
			) : (
				<CircularProgress />
			)}
		</Grid>
	);
}

export default NewsList;
