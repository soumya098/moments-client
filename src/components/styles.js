import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	ul: {
		justifyContent: "space-around",
		"& .MuiPaginationItem-root": {
			margin: "0px",
			padding: "0px",
		},
	},
}));
