import React from 'react'
import Loby from "./Loby"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeC from './HomeCo' 
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route Component={Loby} path="/" />
        <Route Component={HomeC} path="/Home" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;