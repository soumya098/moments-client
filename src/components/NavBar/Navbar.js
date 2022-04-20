import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";

export const Navbar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodeToken = decode(token);
			if (decodeToken.exp * 1000 < new Date().getTime()) {
				logoutUser();
			}
		}
		setUser(JSON.parse(localStorage.getItem("user")));
	}, [location]);

	const logoutUser = () => {
		setUser(null);
		dispatch({ type: "LOGOUT" });
		navigate("/");
	};

	return (
		<AppBar position="static" color="inherit" className={classes.appBar}>
			<Link to="/" className={classes.brandContainer}>
				<img src={memoriesText} alt="memories" height="40px" />
				<img src={memoriesLogo} alt="memories" className={classes.image} />
			</Link>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar className={classes.purple} src={user.profile.imageUrl} alt={user.profile.name}>
							{user.profile.name.charAt(0).toUpperCase()}
						</Avatar>
						<Typography className={classes.userName} variant="body2">
							{user.profile.name}
						</Typography>
						<Button variant="contained" color="secondary" onClick={logoutUser} size="small">
							log out
						</Button>
					</div>
				) : (
					<Button variant="contained" color="primary" component={Link} to="/auth" size="small">
						Sign in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
