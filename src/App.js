import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./App.css";
import axios from "axios";
import PostList from "./components/PostList";
import AppPagination from "./components/Pagination/AppPagination";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="posts" element={<PostPage />} />
      </Routes>

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
