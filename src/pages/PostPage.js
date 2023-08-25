import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../App.css";
import PostList from "../components/PostList";
import AppPagination from "../components/Pagination/AppPagination";
import { useFetchPosts } from "../hooks/useFetchPosts";

export default function PostPage() {
  const [page, setPage] = useState(1);

  const { data: posts, loading, pageNumbers } = useFetchPosts(page);

  return (
    <div>
      <h1>Post Cards</h1>
      <Container sx={{ marginBottom: "20px" }}>
        <Grid container spacing={5}>
          <PostList posts={posts} />
        </Grid>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "20px",
          height: "50px",
          backgroundColor: "lightBlue",
        }}
      >
        <AppPagination
          setPage={setPage}
          page={page}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
}
