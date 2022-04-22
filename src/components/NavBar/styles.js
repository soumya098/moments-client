import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
	[theme.breakpoints.down("sm")]: {
		heading: { fontSize: "1.4rem !important" },
		image: { maxWidth: "2.2rem !important" },
	},
	[theme.breakpoints.only("sm")]: {
		heading: { fontSize: "1.8rem" },
		image: { maxWidth: "2.5rem !important" },
	},
	[theme.breakpoints.up("md")]: {
		heading: { fontSize: "1.8rem" },
		image: { maxWidth: "3rem !important" },
	},
	appBar: {
		borderRadius: 15,
		margin: "10px 0",
		padding: "0px 16px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			padding: "10px",
		},
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
		padding: "0 0 0 8px",
	},
	heading: {
		fontFamily: "'Sofia', 'sans-serif-italic'",
		marginRight: "4px",
		color: "#00b7ff",
		textDecoration: "none",
	},
	image: {
		maxWidth: "3rem",
		height: "auto",
		objectFit: "contain",
	},
	toolbar: {
		width: "40%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
		},
	},
	profile: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			justifyContent: "center",
		},
	},
	userName: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		marginRight: "8px",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		marginRight: "8px",
	},
}));
