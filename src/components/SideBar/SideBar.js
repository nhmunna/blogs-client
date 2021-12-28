import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Sidebar.css';

const SideBar = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState([]);



    useEffect(() => {
        const url = `https://evening-brushlands-73529.herokuapp.com/userInfo?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setUserInfo(data))
    }, [user.email])

    return (
        <div>
            <h5 className='heading'>About Me</h5>
            {
                user.email ?
                    userInfo.map(user => (<div key={user._id} className="w-100 m-2 shadow-sm p-2 rounded-3 user">
                        <img className="img-fluid img" src={`data:image/png;base64,${user.img}`} alt="" />
                        <h3 className="user-name">{user.name}</h3>
                        <p className="px-3 user-details" >{user.about}</p>
                    </div>)) :
                    <Link to="/userInfo">Hey!!! You can add your info. Just click here to add your info</Link>
            }
        </div>
    );
};

export default SideBar;