import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import SignUp from "../components/signup";
import HomePage from "../pages/HomePage";
export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    );
}