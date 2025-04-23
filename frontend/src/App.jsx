import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Signup } from './Pages/Signup';
import { Signin } from './pages/Signin';
import { Dashoard } from './pages/Dashboard';
import { Send } from './pages/Send';




  function App() {
    return <div>    
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/dashboard" element={<Dashoard />} /> 
          <Route path="/send" element={<Send />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  }

  
  export default App
