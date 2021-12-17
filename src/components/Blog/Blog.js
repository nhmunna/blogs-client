import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, writer, description, img } = blog;

    return (
        <div className="m-2 shadow p-2 rounded-3 text-center">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="text-success">{title}</h3>
            <h5 className="text-warning">{writer}</h5>
            <p className="px-3" >{description.slice(0, 200)}</p>
            <Link to={`/singleBlog/${_id}`}>
                <button className="btn btn-success shadow">Details</button>
            </Link>
        </div>
    );
};

export default Blog;