import React, { useState } from 'react';
import './AddBlog.scss';
import axios from 'axios';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    imageURL: '',
    timeToRead: '',
  });
  const [required, setRequired] = useState('none');
  const [success, setSuccess] = useState('none');
  const [error, setError] = useState('none');

  const addBlog = () => {
    // console.log(formData);
    setRequired('none');
    if (
      formData.title === '' ||
      formData.description === '' ||
      formData.content === '' ||
      formData.imageURL === '' ||
      formData.timeToRead === ''
    ) {
      setRequired('block');
      setSuccess('none');
      return;
    }

    try {
      // https://api-coachync.herokuapp.com/api/addblog
      axios
        .post('http://localhost:3001/api/addblog', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          imageURL: formData.imageURL,
          title: formData.title,
          content: formData.content,
          timeToRead: parseInt(formData.timeToRead),
        })
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            setFormData({
              title: '',
              description: '',
              content: '',
              imageURL: '',
              timeToRead: '',
            });
            setSuccess('block');
          } else {
            setError('block');
            setSuccess('none');
          }
        });
    } catch (error) {
      console.error(error);
      setError('block');
      setSuccess('none');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="Add__Blog">
      <div className="page__row">
        <h1 className="page__title">Add New Blog</h1>
      </div>
      <div className="page__row">
        <div className="form__group">
          <label htmlFor="title" className="form__label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form__control"
            onChange={handleChange}
            placeholder="Blog title"
            value={formData.title}
          />
        </div>
        <div className="form__group">
          <label htmlFor="description" className="form__label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="form__control"
            placeholder="Brief description about this blog (about 15~20 words)"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <div className="form__group">
          <label htmlFor="timeToRead" className="form__label">
            Time to Read
          </label>
          <input
            type="number"
            id="timeToRead"
            name="timeToRead"
            className="form__control"
            onChange={handleChange}
            placeholder="Example: 10"
            value={formData.timeToRead}
          />
        </div>
        <div className="form__group">
          <label htmlFor="content" className="form__label">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="10"
            className="form__control"
            onChange={handleChange}
            placeholder="Paste here the blog content"
            value={formData.content}
          ></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="imageURL" className="form__label">
            Image URL
          </label>
          <input
            type="url"
            id="imageURL"
            name="imageURL"
            className="form__control"
            onChange={handleChange}
            placeholder="Blog poster image"
            value={formData.imageURL}
          />
        </div>
        <div className="form__group" style={{ display: required }}>
          <div className="required">All fields are required.</div>
        </div>
        <div className="form__group" style={{ display: success }}>
          <div className="success">The blog has been successfully added.</div>
        </div>
        <div className="form__group" style={{ display: error }}>
          <div className="error">Something went wrong, please try again.</div>
        </div>
        <div className="form__group">
          <button type="button" className="btn__primary" onClick={addBlog}>
            Submit Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
