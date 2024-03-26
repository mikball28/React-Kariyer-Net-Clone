import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import JobPosts from "./pages/JobPosts";
import Setting from "./pages/Setting";
import JobPostsDetail from "./pages/JobPostsDetail";
import Empty from "./component/Empty";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/giriş"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/hesabim" element={<Profile />} />
        <Route path="/is-ilanlari" element={<JobPosts />} />
        <Route path="/is-ilanlari/:ilanadi" element={<JobPostsDetail />} />
        <Route path="/ayarlar" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
