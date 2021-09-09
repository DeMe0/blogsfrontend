import React from "react";
import Blog from "../components/blog"

const AllBlogs = (props) => {
  return props.blogs.map((blog) => <Blog blog={blog} key={blog.id}/>);
};

export default AllBlogs;