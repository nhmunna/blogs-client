import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlog.css';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    const { img, title, writer, description } = blog;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])

    return (
        <div className="blog shadow rounded-3">
            <div>
                <img className="img-fluid" src={img} alt="" />
                <h3 className="text-success">{title}</h3>
                <h5 >{writer}</h5>
                <p className="px-3" >{description}</p>
            </div>
        </div>
    );
};

export default SingleBlog;