import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import Auth from './Auth/Auth';
import Search from '../Search/Search';

function Navbar() {
	const classes = useStyles();
	const userData = useSelector(state => state.auth.userData);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Grid container>
						<Grid item sm={4}>
							<Typography variant="h6" className={classes.title}>
								<span style={{ color: 'white' }}>
									R<span style={{ color: 'pink' }}>edu</span>x
								</span>{' '}
								<span style={{ color: 'white' }}>
									N<span style={{ color: 'pink' }}>ews</span>
									TV
								</span>
							</Typography>
						</Grid>
						<Grid item sm={6}>
							<Search />
						</Grid>
						<Grid item sm={1}>
							{userData && (
								<Avatar
									src={userData?.imageUrl}
									alt={userData?.givenName}
								/>
							)}
							{userData?.givenName}
						</Grid>
						<Grid item sm={1}>
							<Auth />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
