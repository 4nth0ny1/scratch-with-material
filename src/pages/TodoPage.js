import TodoList from "../components/TodoList";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../App.css";
import { useFetchTodos } from "../hooks/useFetchTodos";

export default function TodoPage() {
  const [visible, setVisible] = useState(4);

  const { data: todos, loading } = useFetchTodos();

  return (
    <div>
      <h1>Todo List</h1>
      {loading && <div>Loading ...</div>}
      {!loading && (
        <div>
          <Container sx={{ marginBottom: "20px" }}>
            <Grid container spacing={5}>
              <TodoList
                todos={todos}
                visible={visible}
                setVisible={setVisible}
              />
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
}
