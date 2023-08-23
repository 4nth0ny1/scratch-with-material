import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useFetchTodoById from "../hooks/useFetchTodoById";

export default function TodoDetailPage() {
  let params = useParams();
  const [todo, setTodo] = useState({});

  // const fetchTodoById = () => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  //     .then((res) => setTodo(res.data));
  // };

  useEffect(() => {
    // fetchTodoById();
    const todo = useFetchTodoById(params.id);
    setTodo(todo);
  }, []);

  return (
    <div>
      <h2>{todo.title}</h2>
      <br></br>
      <p>{todo.completed ? "completed" : "not complete"}</p>
    </div>
  );
}
