import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gray-400 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
        {/* Logo Section */}
        <div className="bg-blue-600 w-16 h-16 rounded-sm mx-auto flex items-center justify-center mb-1 shadow-lg">
          <img src="/eteclogo.png" alt="ETEC Logo" className="w-14" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">ETEC CENTER</h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-2">
          Sign in to your account
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Access your school management dashboard
        </p>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4">
          {/* Google Button */}
          <button className="relative flex items-center justify-center w-full border-2 border-gray-100 py-2.5 rounded-lg hover:bg-gray-50 transition-all font-medium">
            <FaGoogle className="absolute left-4 text-xl text-blue-500" />
            <span>Continue with Google</span>
          </button>

          <div className="flex gap-4">
            {/* Microsoft Button */}
            <button className="relative flex items-center justify-center w-full border-2 border-gray-100 py-2.5 rounded-lg hover:bg-gray-50 transition-all font-medium">
              <BsMicrosoft className="absolute left-3 text-lg text-blue-500" />
              <span className="ml-4">Microsoft</span>
            </button>

            {/* LinkedIn Button */}
            <button className="relative flex items-center justify-center w-full border-2 border-gray-100 py-2.5 rounded-lg hover:bg-gray-50 transition-all font-medium">
              <FaLinkedin className="absolute left-3 text-xl text-blue-700" />
              <span className="ml-4">LinkedIn</span>
            </button>
          </div>
        </div>

        <div className="flex items-center my-2 w-full max-w-md mt-8">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-4 text-gray-400 text-sm font-medium uppercase tracking-wider">
            Or continue with
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="w-full max-w-sm relative z-50 p-4">
          <div className="flex flex-col gap-2 relative">
            <h5 className="text-[16px] text-gray-400 font-semibold text-left">
              Username or Email
            </h5>
            <FaUser className="absolute top-11 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="username or email"
              className="w-full p-2 text-white bg-transparent border-2 border-gray-500 rounded-md outline-none transition-all duration-300
                 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent 
                 focus:border-b-blue-500 focus:text-blue-500 focus:rounded-none placeholder:text-gray-500 ps-8"
            />
          </div>
          <div className="text-right mt-2">
            <a
              href="#"
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex flex-col gap-2 relative">
            <h5 className="text-[16px] text-gray-400 font-semibold text-left">
              Password
            </h5>
            <FaLock className="absolute top-11 left-2 text-gray-500 text-xl" />
            <input
              type="password"
              placeholder="password"
              className="w-full p-2 text-white bg-transparent border-2 border-gray-500 rounded-md outline-none transition-all duration-300
                 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent 
                 focus:border-b-blue-500 focus:text-blue-500 focus:rounded-none placeholder:text-gray-500 ps-8"
            />
            <LiaEyeSolid className="absolute top-11 right-2 text-gray-500 text-2xl " />
          </div>
        </div>

        <div className="flex items-center gap-2 text-left mt-2">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer accent-blue-600 rounded border-gray-500 bg-transparent"
          />
          <span className="font-semibold text-gray-500 text-sm cursor-pointer select-none">
            Keep me signed in
          </span>
        </div>

        <div>
          <button className="text-white bg-blue-600 w-full my-2 py-2 rounded-sm hover:scale-105 transition-all duration-300 cursor-pointer">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-start gap-2 mt-4">
          <span className="text-gray-500 text-sm">Don't have an account?</span>
          <span className="text-blue-500 font-semibold text-sm cursor-pointer hover:underline">
            Register your school
          </span>
        </div>
      </div>
       <div className="mt-8 text-xs relative z-50 text-center">
        © 2026 ETEC CENTER. All rights reserved.
      </div>
      
      <ul className="flex justify-between gap-10 text-sm">
          <li>Privacy</li>
          <li>Terms of Service</li>
          <li>Support Center</li>
        </ul>
    </div>
    
  );
};

export default Login;
