import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TodoDetailPage from "../pages/TodoDetailPage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList({ todos, visible, setVisible }) {
  const navigate = useNavigate();
  const showMoreTodos = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <>
      {todos.slice(0, visible).map((todo) => {
        return (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={10} key={todo.id} rounded>
                <Box paddingX={2}>
                  <Typography component="h2" variant="h6">
                    {todo.title}
                  </Typography>
                  <Typography component="p" variant="body2" paddingY={1}>
                    {todo.completed}
                  </Typography>
                  {/* <Link navigate={`/todos/${todo.id}`}> */}
                  <Button
                    onClick={() => {
                      navigate(`/todos/${todo.id}`);
                    }}
                  >
                    View
                  </Button>

                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
          </>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "50%" }}
          onClick={showMoreTodos}
        >
          Load More
        </Button>
      </div>
    </>
  );
}
