import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./App.css";
import axios from "axios";
import PostList from "./components/PostList";
import AppPagination from "./components/Pagination/AppPagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState(0);

  const fetchPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=10`
      )
      .then((res) => {
        setPosts(res.data);
        // THIS MIGHT BE WRONG ... get the number of items (which is 10 because it was limited) and multiply it by 10 to get the full amount of data. Then divide it by the number of pages needed.
        setPageNumbers((res.data.length * 10) / 10);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
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

      {/* <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container> */}
    </div>
  );
}
