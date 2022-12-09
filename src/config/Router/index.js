import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CreateBlog,
  DetailBlog,
  Home,
  Login,
  MainApp,
  NotFound,
  Register,
} from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="detail-blog" element={<DetailBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
