import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";

export const Navbar = () => {
	const classes = useStyles();
	const user = null;

	const logoutUser = () => {};

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
						<Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>
							{user.result.name.charAt(0).toUpperCase()}
						</Avatar>
						<Typography className={classes.userName} variant="h6">
							{user.result.name}
						</Typography>
						<Button variant="contained" className={classes.logout} color="secondary" onClick={logoutUser}>
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
