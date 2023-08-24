import axios from "axios";
import React, { useState, useEffect } from "react";

export const useFetchTodoById = (id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { data };
};
