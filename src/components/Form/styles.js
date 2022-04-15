import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
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
		padding: theme.spacing(2),
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		margin: "10px 0",
	},
	btnSubmit: {
		margin: 10,
	},
}));
