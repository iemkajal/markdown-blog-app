import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../dashboard/Sidebar";
import UpdateBlog from "../dashboard/UpdateBlog";
import MyBlogs from "../dashboard/MyBlogs";
import MyProfile from "../dashboard/MyProfile";
import CreateBlog from "../dashboard/CreateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  console.log(profile);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Sidebar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Update Blog" ? (
        <UpdateBlog />
      ) : (
        <MyBlogs />
      )}
      Dashboard
    </div>
  );
}

export default Dashboard;
