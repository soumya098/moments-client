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
		padding: "0px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
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
		// eslint-disable-next-line
		["@media screen and (max-width: 496px)"]: {
			fontSize: "1rem !important",
		},
	},
	image: {
		maxWidth: "3rem",
		height: "auto",
		objectFit: "contain",
	},
	toolbar: {
		display: "flex",
		flexDirection: "row",
		// justifyContent: "flex-end",
	},
	profile: {
		display: "flex",
		flex: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	userName: {
		display: "flex",
		alignItems: "center",
		marginRight: "4px",
		// eslint-disable-next-line
		["@media screen and (max-width: 496px)"]: {
			fontSize: ".7rem !important",
		},
	},
	logout: {
		// eslint-disable-next-line
		["@media screen and (max-width: 496px)"]: {
			fontSize: ".6rem !important",
		},
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		marginRight: "4px",
		// eslint-disable-next-line
		["@media screen and (max-width: 496px)"]: {
			maxWidth: "2.4rem !important",
		},
	},
}));
