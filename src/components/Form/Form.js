import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createPost, updatePost } from "../../actions/postsActionCreators";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from "react-file-base64";
import useStyles from "./styles";

const Form = ({ postId, setPostId }) => {
	const classes = useStyles();
	const fileRef = useRef();
	const dispatch = useDispatch();
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("user"));

	const [disable, setDisable] = useState(true);
	const [formData, setformData] = useState({
		title: "",
		message: "",
		tags: [],
		imageFile: "",
	});

	const [formTitle, setFormTitle] = useState("Create");
	const post = useSelector((store) => (postId ? store.posts.posts.find((p) => p._id === postId) : null));

	useEffect(() => {
		if (post) {
			setFormTitle("Update");
			setDisable(false);
			setformData(post);
		}
	}, [post, location]);

	const clearForm = () => {
		fileRef.current.value = "";
		setformData({
			title: "",
			message: "",
			tags: [],
			imageFile: "",
		});
		setDisable(true);
		setPostId(null);
	};

	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await converBase64(file);
		setformData({ ...formData, imageFile: base64 });
		setDisable(false);
	};

	const converBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => resolve(fileReader.result);
			fileReader.onerror = (error) => reject(error);
		});
	};

	const handleSubmit = (e) => {
		if (postId) {
			dispatch(updatePost(postId, { ...formData, userName: user?.profile?.name }));
		} else {
			dispatch(createPost({ ...formData, userName: user?.profile?.name }));
		}
		clearForm();
		e.preventDefault();
	};

	if (!user?.profile?.name) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h6" align="center">
					Please Sign In to create your own memories and like others memories
				</Typography>
			</Paper>
		);
	}

	return (
		<Paper className={classes.paper} elevation={6}>
			<form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
				<Typography variant="h6">{formTitle} a Memory</Typography>
				<TextField
					name="title"
					label="Title"
					variant="outlined"
					fullWidth
					value={formData.title}
					onChange={(e) => {
						setformData({ ...formData, title: e.target.value });
						setDisable(false);
					}}
				/>
				<TextField
					name="message"
					label="Message"
					variant="outlined"
					fullWidth
					multiline
					minRows={2}
					value={formData.message}
					onChange={(e) => {
						setformData({ ...formData, message: e.target.value });
						setDisable(false);
					}}
				/>
				<TextField
					name="tags"
					label="Tags"
					variant="outlined"
					fullWidth
					value={formData.tags}
					onChange={(e) => {
						setformData({ ...formData, tags: e.target.value.split(",") });
						setDisable(false);
					}}
				/>
				{/* <div className={classes.fileInput}>
					<FileBase type="file" multiple={false} onDone={({ base64 }) => setformData({ ...formData, imageFile: base64 })} />
				</div> */}
				<div className={classes.fileInput}>
					<input ref={fileRef} type="file" multiple={false} onChange={(e) => uploadImage(e)} required />
				</div>
				<Button className={classes.btnSubmit} variant="contained" color="primary" size="small" type="submit" disabled={disable}>
					{formTitle}
				</Button>
				<Button className={classes.btnSubmit} variant="outlined" color="secondary" size="small" onClick={clearForm}>
					clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
