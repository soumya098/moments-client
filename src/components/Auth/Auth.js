import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { signUp, signIn } from "../../actions/authActionCreators";
import { Container, Grid, Paper, Avatar, Button, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import Icon from "./Icon";
import useStyles from "./styles";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const Auth = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isSignUp, setIsSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignUp) {
			dispatch(signUp(formData, navigate));
		} else {
			dispatch(signIn(formData, navigate));
		}
	};

	const googleSuccess = async (res) => {
		const profile = res?.profileObj;
		const token = res?.tokenId;
		try {
			dispatch({ type: "AUTH", data: { profile, token } });
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = (error) => {
		console.log("Google sign in was unsuccessfull");
		console.log(error);
	};

	return (
		<Container maxWidth="xs">
			<Paper className={classes.paper} elevation={5}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
				<form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
					<Grid container spacing={2} alignItems="center">
						{isSignUp && (
							<>
								<Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
								<Input name="lastName" label="Last Name" handleChange={handleChange} half />
							</>
						)}
						<Input name="email" label="Email" handleChange={handleChange} type="email" />
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={() => setShowPassword(!showPassword)}
						/>
						{isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
					</Grid>
					<Button type="submit" fullWidth color="primary" className={classes.submit} variant="contained">
						{isSignUp ? "Sign Up" : "Sign In"}
					</Button>
					<Grid container spacing={2} justifyContent="flex-end" alignItems="center">
						<Typography>{isSignUp ? "Already have an account?" : "Don't have an account?"}</Typography>
						<Grid item>
							<Button onClick={() => setIsSignUp(!isSignUp)} variant="outlined" size="small" color="primary">
								{isSignUp ? "Sign In" : "Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
				<Grid container spacing={1} justifyContent="center">
					<div>- - - - - - - - - Or - - - - - - - - - -</div>
					<GoogleLogin
						clientId="8602212830-pv6ishamlaots28osb0gkfh2gv3g03qd.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								variant="contained"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
							>
								Sign in with Google
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
					/>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Auth;
