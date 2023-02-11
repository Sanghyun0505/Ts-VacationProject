import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import HomePage from "../pages/HomePage";
export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}