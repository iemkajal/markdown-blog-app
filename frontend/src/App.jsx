import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Creators from "./pages/Creators";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./dashboard/UpdateBlog";
import Detail from "./pages/Detail";
import NotFound from "./pages/Notfound"

function App() {
  const location = useLocation();

  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname,
  );

  const { blogs, isAuthenticated } = useAuth();
  let token = localStorage.getItem("jwt"); 
  console.log( blogs);
  console.log(isAuthenticated);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route
          exact
          path="/"
          element={token ? <Home /> : <Navigate to={"/login"} />}
        />
      
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Single page route */}
        <Route path="/blog/:id" element={<Detail />} />
        {/* Update page route */}
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
        {/* Universal route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
