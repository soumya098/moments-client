import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postsActionCreators";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from "react-file-base64";
import useStyles from "./styles";

const Form = () => {
	const classes = useStyles();
	const fileRef = useRef();
	const dispatch = useDispatch();

	const [formData, setformData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		imageFile: "",
	});

	const clearForm = () => {
		fileRef.current.value = "";
		setformData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			imageFile: "",
		});
	};

	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await converBase64(file);
		setformData({ ...formData, imageFile: base64 });
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
		console.log(formData);
		clearForm();
		dispatch(createPost(formData));
		e.preventDefault();
	};

	return (
		<Paper className={classes.paper}>
			<form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
				<Typography variant="h6">Create new Memories</Typography>
				<TextField
					name="creator"
					label="Creator"
					variant="outlined"
					fullWidth
					value={formData.creator}
					onChange={(e) => setformData({ ...formData, creator: e.target.value })}
				/>
				<TextField
					name="title"
					label="Title"
					variant="outlined"
					fullWidth
					value={formData.title}
					onChange={(e) => setformData({ ...formData, title: e.target.value })}
				/>
				<TextField
					name="message"
					label="Message"
					variant="outlined"
					fullWidth
					value={formData.message}
					onChange={(e) => setformData({ ...formData, message: e.target.value })}
				/>
				<TextField
					name="tags"
					label="Tags"
					variant="outlined"
					fullWidth
					value={formData.tags}
					onChange={(e) => setformData({ ...formData, tags: e.target.value })}
				/>
				{/* <div className={classes.fileInput}>
					<FileBase type="file" multiple={false} onDone={({ base64 }) => setformData({ ...formData, imageFile: base64 })} />
				</div> */}
				<div className={classes.fileInput}>
					<input ref={fileRef} type="file" multiple={false} onChange={(e) => uploadImage(e)} />
				</div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit">
					submit
				</Button>
				<Button className={classes.buttonSubmit} variant="outlined" color="secondary" size="small" onClick={clearForm}>
					clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
