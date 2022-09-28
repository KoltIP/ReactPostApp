import React from 'react'; 
import ReactDOM from "react-dom";
import './styles/App.css'
import {BrowserRouter, Route, Routes, Link, Redirect} from 'react-router-dom';
import About from "./pages/About";
import MyNavBar from "./components/UI/NavBar/MyNavBar";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import AppRouter from "./components/AppRouter"



function App(){
  return (   
      <AppRouter />     
  );
};

export default App;