import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth()
    // const time = Date().toLocaleString();
    // const [time, setTime] = React.useState(new Date());
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    // const [email, setEmail] = useState(user.email);
    const email = user.email;
    // const [blog, setBlog] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('about', about);
        formData.append('email', email);
        formData.append('img', image);

        fetch('http://localhost:5000/userInfo', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('user info added successfully');
                    // setSuccess(' ');
                    // <div class="alert alert-success" role="alert">
                    //     Successfully submit your Blog.
                    // </div>
                    // alert('')
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset();
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputUserName" className="form-label">Name</label>
                <input onChange={e => setName(e.target.value)} name="title" type="text" className="form-control" id="exampleInputUserName" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">About</label>
                <textarea onChange={e => setAbout(e.target.value)} class="form-control" name="blog" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="formFileMultiple" class="form-label">File</label>
                <input onChange={e => setImage(e.target.files[0])} class="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <button type="submit" className="btn btn-dark text-white w-100 px-5 my-2 text-center">Upload</button>
        </form>
        {success && <p className="text-success">{success}</p>}
    </div>
    );
};

export default UserInfo;