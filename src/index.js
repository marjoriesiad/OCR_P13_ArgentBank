import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./features/store";
import Footer from "./components/Footer/index.jsx";
import Home from "./components/Home/index.jsx";
import Login from "./components/Login/index.jsx";
import User from "./components/User/index.jsx";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
);
