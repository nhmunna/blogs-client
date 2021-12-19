import React from 'react';

const MyBlog = ({ blog }) => {
    const { title, writer, description, img, time } = blog;
    return (
        <div className="col-lg-4 m-2 shadow p-2 rounded-3 text-center">
            <img className="img-fluid" src={`data:image/png;base64,${img}`} alt="" />
            <h3 className="text-success">{title}</h3>
            <div className="d-flex justify-content-between">
                <h5 className="text-warning">{writer}</h5>
                <h5 className="text-warning">{time}</h5>
            </div>
            <p className="px-3" >{description.slice(0, 200)}</p>
        </div>
    );
};

export default MyBlog;