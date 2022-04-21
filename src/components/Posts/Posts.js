import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setPostId }) => {
	const classes = useStyles();
	const { posts, isLoading } = useSelector((store) => store.posts);

	if (!isLoading && !posts.length) return "No Posts";

	const renderPosts = posts.map((post) => (
		<Grid item key={post._id} xs={12} sm={12} md={6} lg={4}>
			<Post post={post} setPostId={setPostId} />
		</Grid>
	));

	return !isLoading ? (
		<Grid container className={classes.mainContainer} spacing={1} alignItems="stretch">
			{renderPosts}
		</Grid>
	) : (
		<CircularProgress />
	);
};

export default Posts;
