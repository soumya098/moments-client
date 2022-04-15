import React from "react";
import { Card, CardHeader, CardActions, CardContent, CardMedia, Typography, IconButton, Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";

const Post = ({ post }) => {
	const classes = useStyles();
	console.log(post._id);
	return (
		<Card className={classes.card}>
			{/* <CardHeader
				avatar={<Avatar aria-label="recipe">{post.creator[0]}</Avatar>}
				action={
					<IconButton>
						<MoreHorizIcon />
					</IconButton>
				}
				title={post.title}
				subheader="September 14, 2016"
			/> */}
			<CardMedia className={classes.media} image={post.imageFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<IconButton style={{ color: "white" }} size="small" onClick={() => alert("btn clicked")}>
					<MoreHorizIcon />
				</IconButton>
			</div>
			<CardContent className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
				<Typography variant="body1" className={classes.title}>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div>
					<IconButton aria-label="like">
						<ThumbUpIcon fontSize="small" />
					</IconButton>
					Like {post.likeCount}
				</div>
				<IconButton aria-label="delete">
					<DeleteIcon fontSize="small" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
