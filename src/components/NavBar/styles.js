import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
	[theme.breakpoints.down("sm")]: {
		heading: { fontSize: "1.8rem !important" },
		image: { maxWidth: "2.4rem !important" },
	},
	[theme.breakpoints.only("sm")]: {
		heading: { fontSize: "2.2rem" },
		image: { maxWidth: "2.8rem !important" },
	},
	[theme.breakpoints.only("md")]: {
		heading: { fontSize: "2.6rem" },
		image: { maxWidth: "3.4rem !important" },
	},
	appBar: {
		borderRadius: 15,
		margin: "10px 0",
		padding: "6px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
		padding: "0 16px",
	},
	heading: {
		fontFamily: "'Sofia', 'sans-serif-italic'",
		marginRight: "4px",
		color: "#00b7ff",
		textDecoration: "none",
		// eslint-disable-next-line
		["@media screen and (max-width: 340px)"]: {
			fontSize: "1.3rem !important",
		},
	},
	image: {
		maxWidth: "4rem",
		height: "auto",
		objectFit: "contain",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		width: "400px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));