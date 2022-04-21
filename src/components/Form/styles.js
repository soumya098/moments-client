import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "6px 8px",
			padding: "0px !important",
		},
		"& .MuiOutlinedInput-input": {
			padding: "14px !important",
		},
		"& .MuiOutlinedInput-multiline": {
			padding: "0px !important",
		},
		"& .MuiInputLabel-formControl": {
			top: "-3px",
		},
	},
	paper: {
		padding: theme.spacing(1),
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		marginTop: "6px",
	},
	btnSubmit: {
		margin: "10px 16px 0px",
	},
}));
