import axios from "axios";

export function useFetchTodoById(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      return res.data;
    });
}
