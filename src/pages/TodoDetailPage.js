import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TodoDetailPage() {
  let params = useParams();
  const [todo, setTodo] = useState({});

  const fetchTodoById = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      .then((res) => setTodo(res.data));
  };

  useEffect(() => {
    fetchTodoById();
  }, []);

  return (
    <div>
      <h2>{todo.title}</h2>
      <br></br>
      <p>{todo.completed ? "completed" : "not complete"}</p>
    </div>
  );
}
