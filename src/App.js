import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/postsActionCreators";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import memories from "./images/memories.png";

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [postId, setPostId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="xl">
			<AppBar position="static" color="inherit" className={classes.appBar}>
				<Typography variant="h3" align="center" className={classes.heading}>
					Memories
				</Typography>
				<img src={memories} alt="memories" className={classes.image} />
			</AppBar>
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
		</Container>
	);
};

export default App;
