import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

function Home() {
	const classes = useStyles();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	return (
		<Grid
			className={classes.bg}
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: '90vh' }}
		>
			<Grid item xs={3}>
				<Typography variant="h2">Redux NewsTV</Typography>
			</Grid>
			<Grid item>
				<Typography variant="h5">
					Keep yourself updated with this minimalistic news fetcher
					website
				</Typography>
			</Grid>
			{!isAuthenticated && (
				<Grid item>
					<Typography variant="h6">
						Login to start searching
					</Typography>
				</Grid>
			)}
		</Grid>
	);
}

export default Home;
