import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Error from "../pages/Error";

const AppRouter = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path={"/home/"} element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/error" replace/>}
                />
            </Routes>
        </div>
    );
};

export default AppRouter;