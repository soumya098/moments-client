import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";

export const Navbar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	console.log(user);

	useEffect(() => {
		const token = user?.token;
		setUser(JSON.parse(localStorage.getItem("user")));
	}, [location]);

	const logoutUser = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
		setUser(null);
	};

	return (
		<AppBar position="static" color="inherit" className={classes.appBar}>
			<div className={classes.brandContainer}>
				<Typography variant="h3" align="center" className={classes.heading} component={Link} to="/">
					Memories
				</Typography>
				<img src={memories} alt="memories" className={classes.image} />
			</div>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar className={classes.purple} src={user.profile.imageUrl} alt={user.profile.name}>
							{user.profile.name.charAt(0).toUpperCase()}
						</Avatar>
						<Typography className={classes.userName} variant="body2">
							{user.profile.name}
						</Typography>
						<Button variant="contained" color="secondary" onClick={logoutUser} size="small" className={classes.logout}>
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
