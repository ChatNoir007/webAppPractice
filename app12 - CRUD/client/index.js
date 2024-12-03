import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./index.css";
import App from "./App";
import User from "./User";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/users/" element={<App />}></Route>
      <Route path="/users/:id" element={<User />}></Route>
      <Route path="/users/add" element={<AddUser />}></Route>
      <Route path="/users/edit/:id" element={<EditUser />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
