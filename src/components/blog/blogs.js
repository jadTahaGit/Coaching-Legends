import React, { useState, useEffect } from "react";
import "./Blogs.scss";
import BlogCard from "../ui/BlogCard";
import bike from "../../assets/blog/bike.jpeg";
import axios from "axios";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState("block");
    useEffect(() => {
        try {
            axios
              .get("https://api-coachync.herokuapp.com/api/blogs", {
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              })
              .then((res) => {
                if(res) {
                    setBlogs(res.data.result.blogs);
                    setLoading("none");
                    console.log(res.data.result.blogs);
                }
              });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="Blogs">
            <div className="blogs__container">
                <div className="page__row">
                    <h1 className="page__title">The Coachync Blog</h1>
                </div>
                <div className="page__row" style={{ display: loading }}>
                    <h2>Loading...</h2>
                </div>
                <div className="blogs__row">
                    {
                        blogs && blogs.map(blog => {
                            return (
                                <BlogCard
                                    id={blog._id}
                                    key={blog._id}
                                    title={blog.title || "Blog title is missing"}
                                    description={blog.description || "Blog description is missing"}
                                    date={blog.date || "Blog date is missing"}
                                    readTime={blog.timeToRead || "Blog readTime is missing"}
                                    image={blog.imageURL || bike}
                                    blogURL={"/blog/" + blog._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;