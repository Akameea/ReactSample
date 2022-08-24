import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import React from "react";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/listUser" element={<UserList />}></Route>
          </Routes>
        </header>
      </div>
  );
}

function Home() {
  return <div>
    <main>
      <h2>Welcome to the homepage</h2>
    </main>
    <nav>
      <Link to="/listUser">listUser</Link>
    </nav>
  </div>
}

export default App;

