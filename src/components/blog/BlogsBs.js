import React from "react";
import "./Blogs.scss";
import BlogCardBs from "../ui/BlogCardBs";
import bike from "../../assets/blog/bike.jpeg";

const BlogsBs = () => {
    return (
        <div className="container-fluid px-2 px-md-5">
            <div className="row my-4">
                <h1 className="text-primary">The Coachync Blog</h1>
            </div>
            <div className="row pb-4">
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
                    <BlogCardBs
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

export default BlogsBs;