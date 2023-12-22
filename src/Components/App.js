import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import { AuthProvider } from "../Context/AuthContext";
import Chats from "./Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" Component={Chats}></Route>
            <Route path="/" Component={Login}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
