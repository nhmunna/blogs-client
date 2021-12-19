import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyBlog from '../MyBlog/MyBlog';

const MyBlogs = () => {
    const { user } = useAuth();
    const [myBlog, setMyBlog] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/blogs?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setMyBlog(data))
    }, [])
    return (
        <div>
            <div class="container px-4 mt-5 d-flex flex-row">
                <div class="row g-5">
                    <div className="col-lg-12 col-sm-12">
                        <div className="d-flex flex-grow-1 flex-wrap">
                            {
                                myBlog.map(blog => <MyBlog
                                    key={blog._id}
                                    blog={blog}
                                ></MyBlog>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;