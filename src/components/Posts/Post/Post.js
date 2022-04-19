import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/postsActionCreators";
import moment from "moment";
import useStyles from "./styles";

const Post = ({ post, setPostId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	}, [location]);

	const LikeBtn = () => {
		if (post.likes.length > 0) {
			return post.likes.find((like) => like === (user?.profile?.googleId || user?.profile?._id)) ? (
				<ThumbUpAltIcon fontSize="small" />
			) : (
				<ThumbUpAltOutlinedIcon fontSize="small" />
			);
		}
		return <ThumbUpAltOutlinedIcon fontSize="small" />;
	};

	const LikesString = () => {
		if (post.likes.length > 0) {
			return post.likes.find((like) => like === (user?.profile?.googleId || user?.profile?._id)) ? (
				<span className={classes.likes}>
					&nbsp;{post.likes.length > 1 ? `you and ${post.likes.length - 1} other` : `${post.likes.length}`}{" "}
					{`like${post.likes.length > 1 ? `s` : ``}`}
				</span>
			) : (
				<span className={classes.likes}>
					&nbsp;{post.likes.length} {post.likes.length === 1 ? "like" : "likes"}
				</span>
			);
		}
		return <span className={classes.likes}>&nbsp;Like</span>;
	};

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.imageFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6" style={{ fontSize: "1.2rem" }}>
					{post.userName}
				</Typography>
				<Typography variant="body2" style={{ fontSize: ".7rem" }}>
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			{(user?.profile?._id === post.creator || user?.profile?.googleId === post.creator) && (
				<div className={classes.overlay2}>
					<IconButton style={{ color: "white" }} onClick={() => setPostId(post._id)}>
						<MoreHorizIcon />
					</IconButton>
				</div>
			)}
			<CardContent className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
				<Typography variant="body1" className={classes.title}>
					{post.title}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<IconButton aria-label="like" onClick={() => dispatch(likePost(post._id))} color="primary" disabled={!user?.profile}>
						<LikeBtn />
					</IconButton>
					<LikesString />
				</div>
				{(user?.profile?._id === post.creator || user?.profile?.googleId === post.creator) && (
					<IconButton aria-label="delete" onClick={() => dispatch(deletePost(post._id))}>
						<DeleteIcon fontSize="small" />
					</IconButton>
				)}
			</CardActions>
		</Card>
	);
};

export default Post;
