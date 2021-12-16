import React from 'react';
import SideBar from '../SideBar/SideBar';

const Blogs = () => {
    return (
        <div>
            <div class="container px-4 mt-5">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <div>blogs part</div>
                    </div>
                    <div class="col-lg-2">
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;