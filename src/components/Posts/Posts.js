import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setPostId }) => {
	const classes = useStyles();
	const posts = useSelector((store) => store.posts);
  
	const renderPosts = posts.map((post) => (
		<Grid item key={post._id} xs={12} sm={6}>
			<Post post={post} setPostId={setPostId} />
		</Grid>
	));

	return posts.length ? (
		<Grid container className={classes.mainContainer} spacing={2} alignItems="stretch">
			{renderPosts}
		</Grid>
	) : (
		<CircularProgress />
	);
};

export default Posts;
