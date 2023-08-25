import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPosts = (page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumbers, setPageNumbers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=10`
        );
        setData(res);
        setPageNumbers((res.length * 10) / 10);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading, pageNumbers };
};
