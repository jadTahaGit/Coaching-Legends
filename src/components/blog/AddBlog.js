import React, { useState, useEffect } from "react";
import "./AddBlog.scss";
import BlogCard from "../ui/BlogCard";
import bike from "../../assets/blog/bike.jpeg";
import axios from "axios";

const AddBlog = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        imageURL: '',
        timeToRead: ''
    });
    const [required, setRequired] = useState("none");
    const [success, setSuccess] = useState("none");
    
    const addBlog = () => {
        console.log(formData);
        setRequired("none");
        if(formData.title === "" || formData.description === "" || formData.content === "" || formData.imageURL === "" || formData.timeToRead === "") {
            setRequired("block");
            return;
        }

        try {
            axios
              .post("https://api-coachync.herokuapp.com/api/addblog", {
                headers: {
                  "Access-Control-Allow-Origin": "*"
                },
                imageURL: formData.imageURL,
                title: formData.title,
                content: formData.content,
                timeToRead: formData.timeToRead
              })
              .then((res) => {
                console.log(res);
                if(res.success) {
                    setFormData({
                        title: '',
                        description: '',
                        content: '',
                        imageURL: '',
                        timeToRead: ''
                    });
                    setSuccess("block");
                }
              });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className="Add__Blog">
            <div className="page__row">
                <h1 className="page__title">Add New Blog</h1>
            </div>
            <div className="page__row">
                <div className="form__group">
                    <label htmlFor="title" className="form__label">Title</label>
                    <input type="text" id="title" name="title" className="form__control" onChange={handleChange} placeholder="Blog title" />
                </div>
                <div className="form__group">
                    <label htmlFor="description" className="form__label">Description</label>
                    <input type="text" id="description" name="description" className="form__control" placeholder="Brief description about this blog (about 15~20 words)" onChange={handleChange} />
                </div>
                <div className="form__group">
                    <label htmlFor="timeToRead" className="form__label">Time to Read</label>
                    <input type="text" id="timeToRead" name="timeToRead" className="form__control" onChange={handleChange} placeholder="Example: 10 min" />
                </div>
                <div className="form__group">
                    <label htmlFor="content" className="form__label">Content</label>
                    <textarea id="content" name="content" rows="10" className="form__control" onChange={handleChange} placeholder="Paste here the blog content">
                    </textarea>
                </div>
                <div className="form__group">
                    <label htmlFor="imageURL" className="form__label">Image URL</label>
                    <input type="url" id="imageURL" name="imageURL" className="form__control" onChange={handleChange} placeholder="Blog poster image" />
                </div>
                <div className="form__group" style={{ display: required }}>
                    <div className="required">All fields are required.</div>
                </div>
                <div className="form__group" style={{ display: success}}>
                    <div className="success">The blog has been successfully added.</div>
                </div>
                <div className="form__group">
                    <button type="button" className="btn__primary" onClick={addBlog}>Submit Blog</button>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;