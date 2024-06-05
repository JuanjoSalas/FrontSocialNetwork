import { React, useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.scss';
import Search from './components/Search/Search';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:userName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
