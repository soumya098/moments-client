import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	[theme.breakpoints.only("xs")]: {
		mainContainer: { flexDirection: "column-reverse !important" },
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
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontFamily: "'Sofia', 'sans-serif-italic'",
		marginRight: "10px",
		color: "#00b7ff",
		// eslint-disable-next-line
		["@media screen and (max-width: 228px)"]: {
			display: "none",
		},
	},
	mainContainer: {
		marginTop: theme.spacing(2),
	},
	image: {
		maxWidth: "4rem",
		height: "auto",
		objectFit: "contain",
	},
}));
