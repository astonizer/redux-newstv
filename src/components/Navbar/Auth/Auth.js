import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogout, GoogleLogin } from 'react-google-login';

import { loginUser } from '../../../redux/actions/authActions';
import { logoutUser } from '../../../redux/actions/authActions';

function Auth() {
	const dispatch = useDispatch();
	// const isAuthenticated = useSelector(state => state.isAuthenticated);

	const authenticateUser = res => {
		dispatch(loginUser(res.profileObj));
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<div>
			{/* {isAuthenticated ? (
				<GoogleLogout
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Logout"
					onLogoutSuccess={handleLogout}
				/>
			) : (
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Login with Google"
					onSuccess={authenticateUser}
					onFailure={authenticateUser}
					// isSignedIn={true}
					// cookiePolicy={'single_host_origin'}
				/>
			)} */}
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				buttonText="Login with Google"
				onSuccess={authenticateUser}
				onFailure={authenticateUser}
				// isSignedIn={true}
				// cookiePolicy={'single_host_origin'}
			/>
			<GoogleLogout
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				buttonText="Logout"
				onLogoutSuccess={handleLogout}
			/>
		</div>
	);
}

export default Auth;
