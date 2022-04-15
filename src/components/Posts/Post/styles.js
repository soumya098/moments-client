import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		backgroundBlendMode: "darken",
	},
	border: {
		border: "solid",
	},
	fullHeightCard: {
		height: "100%",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: "15px",
		height: "100%",
		position: "relative",
		// boxShadow: "0px 2px 2px -1px red, 2px 0px 2px -1px green, -2px 0px 2px -1px blue, 0px -2px 2px -1px yellow",
	},
	overlay: {
		position: "absolute",
		top: "10px",
		left: "15px",
		color: "white",
	},
	overlay2: {
		position: "absolute",
		top: "10px",
		right: "15px",
		color: "white",
	},
	grid: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: theme.spacing(1),
	},
	title: {
		padding: "2px 10px",
	},
	cardActions: {
		padding: "0px 10px",
		display: "flex",
		justifyContent: "space-between",
	},
}));
