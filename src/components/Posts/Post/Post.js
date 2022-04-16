import React from "react";
import { useDispatch } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/postsActionCreators";
import moment from "moment";
import useStyles from "./styles";

const Post = ({ post, setPostId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deletePost(post._id));
	};

	const handleLike = (e) => {
		e.preventDefault();
		dispatch(likePost(post._id));
	};

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.imageFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<IconButton
					style={{ color: "white" }}
					onClick={() => {
						setPostId(post._id);
					}}
				>
					<MoreHorizIcon />
				</IconButton>
			</div>
			<CardContent className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
				<Typography variant="body1" className={classes.title}>
					{post.title}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div>
					<IconButton aria-label="like">
						<ThumbUpIcon fontSize="small" onClick={handleLike} />
					</IconButton>
					Like {post.likeCount}
				</div>
				<IconButton aria-label="delete" onClick={handleDelete}>
					<DeleteIcon fontSize="small" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
