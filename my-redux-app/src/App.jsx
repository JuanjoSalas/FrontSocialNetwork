import { React, useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import './App.scss';
import Search from './components/Search/Search';
import UserDetail from './components/UserDetail/UserDetail';
import Profile from './components/Profile/Profile';
import PrivateZone from './guards/PrivateZone';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:username" element={<PrivateZone><Search /></PrivateZone>} />
          <Route path="/userdetail/:id" element={<PrivateZone><UserDetail /></PrivateZone>} />
          <Route path="/profile" element={<PrivateZone><Profile/></PrivateZone>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
