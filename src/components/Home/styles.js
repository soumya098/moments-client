import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	[theme.breakpoints.down("sm")]: {
		mainContainer: { flexDirection: "column-reverse !important" },
	},
	mainContainer: {
		marginTop: theme.spacing(2),
	},
	pagination: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(1),
	},
}));
