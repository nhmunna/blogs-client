import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyBlog from '../MyBlog/MyBlog';

const MyBlogs = () => {
    const { user } = useAuth();
    const [myBlog, setMyBlog] = useState([]);

    useEffect(() => {
        const url = `https://evening-brushlands-73529.herokuapp.com/blogs?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setMyBlog(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure To Delete?");
        if (proceed) {
            const url = `https://evening-brushlands-73529.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // setOrderDelete(true);
                        window.alert('Your blog has been deleted.')
                        const remainingMyBlog = myBlog.filter(blog => blog._id !== id);
                        setMyBlog(remainingMyBlog);
                    }
                })
        }
    }

    return (
        <div>
            <div class="container px-4 mt-5 d-flex flex-row">
                <div class="row g-5">
                    <div className="d-flex flex-wrap">
                        {
                            myBlog.map(blog => <MyBlog
                                key={blog._id}
                                blog={blog}
                                handleDelete={handleDelete}
                            ></MyBlog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;