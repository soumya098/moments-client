import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			// margin: theme.spacing(1),
			padding: "0px !important",
		},
		"& .MuiOutlinedInput-input": {
			padding: "14px !important",
		},
		"& .MuiInputLabel-formControl": {
			top: "-3px",
		},
	},
	paper: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	googleButton: {
		marginBottom: theme.spacing(2),
	},
}));
