import React from "react";
import { useAuth } from "../context/AuthContext";

function MyProfile() {
  const { profile } = useAuth();
  console.log(profile?.user);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center my-20 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
          
          <div className="relative">
            {/* Cover Image */}
            <img
              src="https://res.cloudinary.com/dgjooywzc/image/upload/v1772096440/q79hjqqg3ftadlme3mr9.jpg"
              alt="profile cover"
              className="w-full h-32 object-cover"
            />

            {/* Profile Avatar */}
            <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
              <img
                src="https://res.cloudinary.com/dgjooywzc/image/upload/v1772096440/q79hjqqg3ftadlme3mr9.jpg"
                alt="profile"
                className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700"
              />
            </div>
          </div>

          <div className="px-6 py-8 mt-12">
            <h2 className="text-center text-2xl font-semibold text-gray-800">
              {profile?.user?.name}
            </h2>

            <p className="text-center text-gray-600 mt-2">
              {profile?.user?.email}
            </p>

            <p className="text-center text-gray-600 mt-2">
              {profile?.user?.phone}
            </p>

            <p className="text-center text-gray-600 mt-2">
              {profile?.user?.role}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyProfile; 