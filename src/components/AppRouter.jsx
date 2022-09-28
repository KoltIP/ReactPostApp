import React from 'react'; 
import ReactDOM from "react-dom";
import '../styles/App.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import MyNavBar from "./UI/NavBar/MyNavBar";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import MainLayout from "../pages/MainLayout";
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router';

const AppRouter = () =>{
    return (
            <BrowserRouter>
                <MyNavBar/>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route exact path="/posts" element={<Posts />} />
                    <Route path="/about" element={<About />} />
                    <Route exact path="/posts/:id" element={<PostIdPage />} />
                    <Route path="*" element={<NotFound />} />
                    {/* {routes.map(route=>
                        <Route 
                        element={route.element}
                        path={route.path} 
                        exact={route.exact}/>
                    )} */}
                </Routes>
        </BrowserRouter>     
    );
}

export default AppRouter;