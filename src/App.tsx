import React from "react";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import { Users } from "./modules/Users/Users";
import { User } from "./modules/User/User";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="*" element={<Navigate to="/users" replace />} />
    </Routes>
  );
}

export default App;
