import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Sidebar.css';

const SideBar = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState([]);



    useEffect(() => {
        const url = `http://localhost:5000/userInfo?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setUserInfo(data))
    }, [])

    return (
        <div>
            <h5 className='heading'>About Me</h5>
            {
                userInfo.map(user => (<div className="w-100 m-2 shadow-sm p-2 rounded-3">
                    <img className="img-fluid img" src={`data:image/png;base64,${user.img}`} alt="" />
                    <h3 className="user-name">{user.name}</h3>
                    <p className="px-3 user-details" >{user.about}</p>
                </div>))
            }
        </div>
    );
};

export default SideBar;