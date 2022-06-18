import React from "react";
import "./blogs.scss";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div className="Blogs">
            <div className="blogs__container">
                <div className="blogs__row">
                    <h1 className="page__title">The Coachync Blog</h1>
                </div>
                <div className="blogs__row">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="blogs__row">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="blogs__row">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    );
};

export default Blogs;