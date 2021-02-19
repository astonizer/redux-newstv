import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import { useStyles } from './styles';

import { searchBlogs } from '../../redux/actions/feedActions';

function Search() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [search, setSearch] = useState('farmer');
	const handleChange = e => {
		setSearch(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		dispatch(searchBlogs(search));
		history.push('/news');
	};

	return (
		<Paper
			component="form"
			className={classes.root}
			onSubmit={handleSubmit}
		>
			<InputBase
				className={classes.input}
				placeholder="Type your search"
				inputProps={{ 'aria-label': 'type your search' }}
				onChange={handleChange}
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
			>
				<SearchOutlined />
			</IconButton>
		</Paper>
	);
}

export default Search;
