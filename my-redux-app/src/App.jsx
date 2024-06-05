import { useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Login/Register';
import './App.scss'
import Search from './components/Login/Search';

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:userName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
