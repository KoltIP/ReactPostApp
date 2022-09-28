import React,{ useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';
const MyNavBar = () =>{

  const {isAuth,setIsAuth} = useContext(AuthContext)

const logout = () =>{
  setIsAuth(false);
  localStorage.removeItem('auth');
}

    return (
        <div className="navbar">
          <MyButton onClick={logout}>Выйти</MyButton>
          <div className="navbar__links">
            <Link to="/">Main</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
    );
};
export default MyNavBar;