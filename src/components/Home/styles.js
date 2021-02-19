import { makeStyles } from '@material-ui/core/styles';

import img from '../../assets/circle.png';

export const useStyles = makeStyles(theme => ({
	bg: {
		backgroundImage: `url(${img})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '40%',
	},
}));
