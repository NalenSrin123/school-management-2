import React from "react";
import { Mail, Key } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Back to Login */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-4">
        <Link
          to="/form/login"
          className="text-sm sm:text-base text-gray-600 hover:text-blue-600 flex items-center gap-2"
        >
          ← Back to Login
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          <Key className="text-blue-600" size={22} />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
          Forgot password?
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          No worries, we'll send you reset instructions.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="name@school.edu"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Go to Reset Email Page */}
          <Link
            to="/form/reset-email"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200 text-sm sm:text-base"
          >
            Send Reset Link
          </Link>
        </form>

        <div className="border-t my-6"></div>

        <p className="text-center text-sm sm:text-base text-gray-500">
          Having trouble?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Contact Support
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="font-semibold text-gray-700 text-sm sm:text-base">
          SCHOOL MANAGEMENT 2
        </p>
        <p className="text-xs text-gray-400 tracking-widest">
          Kru IT Solution Intern
        </p>
      </div>
    </div>
  );
}