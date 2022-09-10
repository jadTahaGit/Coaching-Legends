import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

const BlogCard = (props) => {
    return (
        <Link key={props._id} to={props.blogURL}>
            <div className="blog__card">
                <div className="card__header">
                    <img src={props.image} alt="Blog" className="card__image" />
                </div>
                <div className="card__body">
                    <div className="card__title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="card__paragraph">
                        {props.description}
                    </div>
                </div>
                <div className="card__footer">
                    <div className="card__date">
                        {props.date}
                    </div>
                    <div className="card__read__time">
                        {props.readTime}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;