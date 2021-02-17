import React from 'react';
import { useSelector } from 'react-redux';

import {
	Avatar,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { useStyles } from './styles';
import Auth from './Auth/Auth';

function Navbar() {
	const classes = useStyles();
	const userData = useSelector(state => state.auth.userData);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Happy Blogging
					</Typography>
					{userData && (
						<Avatar
							src={userData?.imageUrl}
							alt={userData?.givenName}
						/>
					)}
					{userData?.givenName}
					<Auth />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
