import React, { useEffect, useState } from 'react';
import { fetchAllBlogs } from '../services/fetch-blogs.js';

export function useAllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchAllBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}
