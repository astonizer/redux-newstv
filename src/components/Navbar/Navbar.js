import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} sm={4}>
							<Link to="/" className={classes.brandTitle}>
								<Typography
									variant="h6"
									className={classes.title}
								>
									<span style={{ color: 'white' }}>
										R
										<span style={{ color: 'pink' }}>
											edu
										</span>
										x
									</span>{' '}
									<span style={{ color: 'white' }}>
										N
										<span style={{ color: 'pink' }}>
											ews
										</span>
										TV
									</span>
								</Typography>
							</Link>
						</Grid>
						{userData && (
							<Grid item xs={12} sm={6}>
								<Search />
							</Grid>
						)}
						{userData && (
							<Grid item xs={6} sm={6} md={1}>
								<Avatar
									src={userData?.imageUrl}
									alt={userData?.givenName}
								/>
							</Grid>
						)}
						<Grid item xs={6} sm={6} md={1}>
							<Auth />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
