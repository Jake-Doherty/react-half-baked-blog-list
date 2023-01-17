import React from 'react';
import { useAllBlogs } from '../../../hooks/blogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';
import './Main.css';

export default function Main() {
  const blogs = useAllBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
