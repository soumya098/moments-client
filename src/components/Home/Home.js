import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";
import { getPosts } from "../../actions/postsActionCreators";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

export const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [postId, setPostId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Grow in>
			<Container maxWidth="xl">
				<Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.mainContainer}>
					<Grid item sm={12} md={8}>
						<Posts setPostId={setPostId} />
					</Grid>
					<Grid item sm={12} md={4}>
						<Form postId={postId} setPostId={setPostId} />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
