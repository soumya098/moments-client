import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostsDetails/PostDetails";
import Auth from "./components/Auth/Auth";

const App = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Routes>
					<Route path="/" element={<Navigate replace={true} to="/posts" />} />
					<Route path="/posts" exact element={<Home />} />
					<Route path="/posts/search" exact element={<Home />} />
					<Route path="/posts/:id" exact element={<PostDetail />} />
					<Route path="/auth" exact element={!user ? <Auth /> : <Navigate replace={true} to="/posts" />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default App;
