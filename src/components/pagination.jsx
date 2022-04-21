import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { getPosts } from "../actions/postsActionCreators";
import useStyles from "./styles.js";

const Paginate = ({ page }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { totalPages } = useSelector((store) => store.posts);

	useEffect(() => {
		if (page) dispatch(getPosts(page));
	}, [page]);

	return (
		<Pagination
			classes={{ ul: classes.ul }}
			count={totalPages}
			page={parseInt(page) || 1}
			variant="outlined"
			color="primary"
			renderItem={(item) => <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />}
		/>
	);
};

export default Paginate;
