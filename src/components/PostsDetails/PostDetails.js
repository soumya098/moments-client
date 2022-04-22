import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../actions/postsActionCreators";
import { useParams, useNavigate } from "react-router-dom";
import { Paper, Typography, CircularProgress, Divider } from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles.js";

const PostDetails = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const { post, posts, isLoading } = useSelector((store) => store.posts);

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	if (!isLoading && Object.keys(post).length === 0)
		return (
			<Paper className={classes.loadingPaper} elevation={6}>
				<Typography>No Post Found</Typography>
			</Paper>
		);

	return !isLoading ? (
		<Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
			<div className={classes.card}>
				<div className={classes.section}>
					<Typography variant="h3" component="h2">
						{post.title}
					</Typography>
					<Typography gutterBottom variant="h6" color="textSecondary" component="h2">
						{post?.tags?.map((tag) => `#${tag} `)}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{post.message}
					</Typography>
					<Typography variant="h6">Created by: {post.userName}</Typography>
					<Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
					<Divider style={{ margin: "20px 0" }} />
					<Typography variant="body1">
						<strong>Realtime Chat - coming soon!</strong>
					</Typography>
					<Divider style={{ margin: "20px 0" }} />
					<Typography variant="body1">
						<strong>Comments - coming soon!</strong>
					</Typography>
					<Divider style={{ margin: "20px 0" }} />
				</div>
				<div className={classes.imageSection}>
					<img
						className={classes.media}
						src={post.imageFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
						alt={post.title}
					/>
				</div>
			</div>
			{/* logic for recommendedPosts */}
		</Paper>
	) : (
		<Paper className={classes.loadingPaper} elevation={6}>
			<CircularProgress size="3rem" />
		</Paper>
	);
};

export default PostDetails;
