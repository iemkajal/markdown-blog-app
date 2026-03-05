import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Devotional() {
  const { blogs } = useAuth();

  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");
  console.log("Devotional blogs", devotionalBlogs);

  return (
    <div className=" container mx-auto my-12 p-4">
      <h1 className="text-2xl font-bold mb-6">Devotional</h1>

      <p className="text-center mb-8">
        Devotionals are meant to inspire, encourage personal spiritual growth,
        and help individuals apply their faith to everyday life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {devotionalBlogs && devotionalBlogs.length > 0 ? (
          devotionalBlogs.map((blog, index) => (
            <Link
              to={`/blog/${blog._id}`}
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </div>

              <div className="p-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dgjooywzc/image/upload/v1772407512/hvczl1usmztbserxrrxz.jpg"
                  alt="author"
                  className="w-10 h-10 rounded-full"
                />

                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-800">
                    {blog?.adminName}
                  </p>
                  <p className="text-xs text-gray-400">New</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center">
            Loading.....
          </div>
        )}
      </div>
    </div>
  );
}

export default Devotional;