import React from 'react'; 
import ReactDOM from "react-dom";
import './styles/App.css'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App(){
  return (
    <div>
      <BrowserRouter>
        <div className='navbar'>
          <div className='navbar__links'>
            <a href="/about">О сайте</a>
            <a href="/posts">Посты</a>
          </div>
        </div>
        <Route path="/about">
          <About />
          <Posts />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;