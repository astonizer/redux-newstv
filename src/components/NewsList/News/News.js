import React from 'react';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Button,
	CardActions,
	Grid,
} from '@material-ui/core';

import { useStyles } from './styles';

function News({ article }) {
	const classes = useStyles();
	console.log(article);
	return (
		<Grid item sm={12} md={4}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="200"
						image={article.urlToImage}
						title={`Source: ${article.source.name}`}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{article.title}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							{article.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						href={article.url}
						size="small"
						color="primary"
						className={classes.button}
					>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default News;
