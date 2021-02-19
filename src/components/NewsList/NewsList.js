import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CircularProgress, Grid } from '@material-ui/core';

import { useStyles } from './styles';

import News from './News/News';

function NewsList() {
	const news = useSelector(state => state.feed.news);
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const history = useHistory();
	const classes = useStyles();
	const [newsDetails, setNewsDetails] = useState();
	if (!isAuthenticated) history.push('/');

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
