import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Store from "./store";
import "./index.css";
import App from "./App";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
		},
	},
});

ReactDOM.render(
	<Provider store={Store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
