import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import PostPage from "./pages/PostPage";
import TourPage from "./pages/TourPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import StackPage from "./pages/StackPage";
import ModalPage from "./pages/ModalPage";
import QuiltPage from "./pages/QuiltPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="/todos/:id" element={<TodoDetailPage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path="tour" element={<TourPage />} />
        <Route path="stack" element={<StackPage />} />
        <Route path="modal" element={<ModalPage />} />
        <Route path="quilt" element={<QuiltPage />} />
      </Routes>
    </div>
  );
}
