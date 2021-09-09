import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our blog, including router prop match
const SingleBlog = ({ match, blogs, edit, deleteBlog }) => {
    const id = parseInt(match.params.id); //get the id from url param
    const blog = blogs.find((blog) => blog.id === id);
  
    ////////////////////
    // Styles
    ///////////////////
    const div = {
      textAlign: "center",
      border: "3px solid green",
      width: "80%",
      margin: "30px auto",
    };
  
    return (
      <div style={div}>
        <h1>{blog.title}</h1>
        <h2>{blog.body}</h2>
        <button onClick={(event) => edit(blog)}>Edit</button>
        <button onClick={(event) => deleteBlog(blog)}>Delete</button>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  };


export default SingleBlog;

