import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import PostPage from "./pages/PostPage";
import TourPage from "./pages/TourPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path="tour" element={<TourPage />} />
      </Routes>
    </div>
  );
}
