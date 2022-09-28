import React from 'react';
import {Link} from 'react-router-dom';
const MyNavBar = () =>{
    return (
        <div className="navbar">
          <div className="navbar__links">
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
    );
};
export default MyNavBar;