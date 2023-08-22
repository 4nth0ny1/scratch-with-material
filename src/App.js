import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./App.css";
import axios from "axios";
import PostList from "./components/PostList";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    const posts = axios
      .get("https://jsonplaceholder.typicode.com/posts/?limit=10")
      .then((res) => setPosts(res.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Post Cards</h1>
      <Container>
        <Grid container spacing={5}>
          <PostList posts={posts} />
        </Grid>
      </Container>
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
