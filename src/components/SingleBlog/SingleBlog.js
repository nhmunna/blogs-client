import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlog.css';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    const { img, title, writer, description, time } = blog;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])

    return (
        <div className="blog shadow rounded-3">
            <div>
                <img className="img-fluid" src={`data:image/png;base64,${img}`} alt="" />
                <h3 className="text-success">{title}</h3>
                <div className="info d-flex justify-content-between">
                    <h5>{writer}</h5>
                    <h5>{time}</h5>
                </div>
                <p className="px-3" >{description}</p>
            </div>
        </div>
    );
};

export default SingleBlog;