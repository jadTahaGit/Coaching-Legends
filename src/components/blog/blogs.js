import React from "react";
import "./Blogs.scss";
import BlogCard from "../ui/BlogCard";
import bike from "../../assets/blog/bike.jpeg";

const Blogs = () => {
    return (
        <div className="Blogs">
            <div className="blogs__container">
                <div className="blogs__row">
                    <h1 className="page__title">The Coachync Blog</h1>
                </div>
                <div className="blogs__row">
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="blogs__row">
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="blogs__row">
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                    <BlogCard
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blogs;