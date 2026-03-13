import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function ConfirmPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white  px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaLock className="text-blue-600 text-xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Reset Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your new password below
        </p>

        <form className="space-y-5">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Reset Password
          </button>
          {/* Back to Login */}
          <p className=" text-sm text-center mt-4">
            <span className="text-gray-600">Remember your password?</span>{" "}
            <Link to="/" className="">
              <span className="text-blue-700 hover:underline underline-offset-2">
                {" "}
                Back to Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ConfirmPassword;
