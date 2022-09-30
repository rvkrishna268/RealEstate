import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addprop from './components/Addprop';
import {PropertyProvider} from "./context";

function App() {
  return (
    <BrowserRouter>
    <PropertyProvider>
    <Routes>
        <Route path="/" element={localStorage.getItem("token") !== null ?<Home/> : <Signin/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addprop" element={<Addprop/>}/>
    </Routes>
    </PropertyProvider>
    </BrowserRouter>
  );
}

export default App;
