import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from '../SideBar/SideBar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div class="container px-4 mt-5 d-flex flex-row">
                <div class="row g-5">
                    <div className="col-lg-10 col-sm-12">
                        <div className="d-flex flex-grow-1 flex-wrap">
                            {
                                blogs.map(blog => <Blog
                                    key={blog._id}
                                    blog={blog}
                                ></Blog>)
                            }
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;