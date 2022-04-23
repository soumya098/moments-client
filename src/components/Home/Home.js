import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid, Paper, Button, AppBar, TextField } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { getPostsBySearch } from "../../actions/postsActionCreators";
import Paginate from "../pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const query = useQuery();

	const [postId, setPostId] = useState(null);
	const [search, setSearch] = useState("");
	const [tags, setTags] = useState([]);

	const page = query.get("page") || 1;
	const searchQuery = query.get("q");
	const searchTags = query.get("tags");
	// console.log(searchQuery, searchTags);

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			searchPost();
		}
	};

	useEffect(() => {
		if (searchQuery || searchTags) {
			dispatch(getPostsBySearch({ search: searchQuery, tags: searchTags }));
		}
	}, []);

	const searchPost = () => {
		if (search.trim() || tags.length > 0) {
			dispatch(getPostsBySearch({ search: search, tags: tags.join(",") }));
			navigate(`/posts/search?q=${search || "none"}&tags=${tags.join(",")}`);
		} else {
			navigate("/");
		}
	};

	return (
		<Grow in>
			<Container maxWidth="xl">
				<Grid container justifyContent="space-between" alignItems="stretch" spacing={2} className={classes.mainContainer}>
					<Grid item xs={12} sm={6} md={8}>
						<Posts setPostId={setPostId} />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<AppBar className={classes.appBarSearch} position="static" color="inherit">
							<TextField
								name="search"
								variant="outlined"
								label="Search Memories"
								value={search}
								fullWidth
								onChange={(e) => setSearch(e.target.value)}
								onKeyDown={handleKeyDown}
							/>
							<ChipInput
								style={{ marginTop: "10px" }}
								value={tags}
								label="Search Tags"
								variant="outlined"
								onAdd={(tag) => setTags([...tags, tag])}
								onDelete={(tagToDelete) => setTags(tags.filter((t) => t !== tagToDelete))}
							/>
							<Button className={classes.searchBtn} color="primary" onClick={searchPost} variant="outlined" size="small">
								Search
							</Button>
						</AppBar>
						<Form postId={postId} setPostId={setPostId} />
						{!searchQuery && !searchTags && (
							<Paper className={classes.pagination} elevation={6}>
								<Paginate page={page} />
							</Paper>
						)}
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
