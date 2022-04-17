import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ name, value, handleChange, label, type, autoFocus, half, handleShowPassword }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				fullWidth
				variant="outlined"
				name={name}
				label={label}
				value={value}
				onChange={handleChange}
				autoFocus={autoFocus}
				type={type}
				required
				InputProps={
					name === "password"
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>{type === "password" ? <Visibility /> : <VisibilityOff />}</IconButton>
									</InputAdornment>
								),
						  }
						: {}
				}
			/>
		</Grid>
	);
};

export default Input;
