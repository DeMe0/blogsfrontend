import React, {useState} from "react";

// destructure out props, including router prop history
const Form = ({ initialBlog, handleSubmit, buttonLabel, history }) => {
    //////////////////////////
    // The Form Data State
    //////////////////////////
    const [formData, setFormData] = useState(initialBlog)

    //////////////////////////
    // Functions
    //////////////////////////
    
    // Standard React Form handleChange function
    const handleChange = (event) => {
        console.log(event.target.name)
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // function to run when form is submitted
    const handleSubmission = (event) => {
        // prevent form refresh
        event.preventDefault();
        // pass the formData to handleSubmit prop function
        handleSubmit(formData)
        // push user back to main page
        history.push("/")
    }
    return (
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.body}
            name="body"
          />
          <input type="submit" value={buttonLabel} />
        </form>
      );
    };

export default Form;