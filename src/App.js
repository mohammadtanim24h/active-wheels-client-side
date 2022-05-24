import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Toaster></Toaster>
        </div>
    );
}

export default App;
