import React from "react";
import "./blogs.scss";
import bike from "./../../assets/blog/bike.jpeg";

const BlogCard = () => {
    return (
        <div className="blog__card">
            <div className="card__header">
                <img src={bike} alt="Blog" className="card__image" />
            </div>
            <div className="card__body">
                <div className="card__title">
                    <h2>Why Cycling Improves My Thinking</h2>
                </div>
                <div className="card__paragraph">
                    I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do.
                </div>
            </div>
            <div className="card__footer">
                <div className="card__date">
                    Jun 12, 2022
                </div>
                <div className="card__read__time">
                    8 min read
                </div>
            </div>
        </div>
    );
};

export default BlogCard;