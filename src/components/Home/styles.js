import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	[theme.breakpoints.down("xs")]: {
		mainContainer: { flexDirection: "column-reverse !important" },
	},
	mainContainer: {
		marginTop: theme.spacing(1),
	},
	pagination: {
		marginTop: theme.spacing(1),
		padding: theme.spacing(1),
		borderRadius: "4px",
	},
	appBarSearch: {
		borderRadius: "4px",
		marginBottom: theme.spacing(1),
		padding: theme.spacing(2),
		display: "flex",
		"& .MuiOutlinedInput-input": {
			padding: "12px !important",
		},
		"& .MuiOutlinedInput-multiline": {
			padding: "0px !important",
		},
		"& .MuiInputLabel-formControl": {
			top: "-4px",
		},
		"& .WAMuiChipInput-inputRoot-21.WAMuiChipInput-outlined-24": {
			paddingTop: "5px !important",
		},
	},
	searchBtn: {
		marginTop: "10px",
	},
}));
