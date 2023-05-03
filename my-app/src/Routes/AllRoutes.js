import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Login2 from "../Pages/login2";
import Products from "../Pages/Products";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/login2" element={<Login2/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
