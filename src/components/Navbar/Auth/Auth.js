import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogout, GoogleLogin } from 'react-google-login';

import { loginUser } from '../../../redux/actions/authActions';
import { logoutUser } from '../../../redux/actions/authActions';

function Auth() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	const authenticateUser = res => {
		dispatch(loginUser(res.profileObj));
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<div>
			{isAuthenticated && (
				<GoogleLogout
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Logout"
					onLogoutSuccess={handleLogout}
				/>
			)}
			{!isAuthenticated && (
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Login with Google"
					onSuccess={authenticateUser}
					onFailure={authenticateUser}
					// isSignedIn={true}
					// cookiePolicy={'single_host_origin'}
				/>
			)}
		</div>
	);
}

export default Auth;
