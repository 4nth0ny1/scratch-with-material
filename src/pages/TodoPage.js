import TodoList from "../components/TodoList";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../App.css";
import axios from "axios";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [visible, setVisible] = useState(4);

  const fetchTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {" "}
      <h1>Todo List</h1>
      <Container sx={{ marginBottom: "20px" }}>
        <Grid container spacing={5}>
          <TodoList todos={todos} visible={visible} setVisible={setVisible} />
        </Grid>
      </Container>
    </div>
  );
}
