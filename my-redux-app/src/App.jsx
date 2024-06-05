import { React, useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Login/Register';
import './App.scss'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
