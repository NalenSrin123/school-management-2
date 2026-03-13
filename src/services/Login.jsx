import React from "react";
import { FaGoogle, FaLinkedin, FaUser, FaLock } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";

const Login = () => {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col justify-center items-center p-4 overflow-hidden">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-[400px] w-full text-center border border-gray-100">
        <div className="w-14 h-14 mx-auto flex items-center justify-center mb-2">
          <img src="/eteclogo.png" alt="ETEC Logo" className="w-full object-contain" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">ETEC CENTER</h2>
        <h3 className="text-md font-semibold text-gray-700 mt-1">
          Sign in to your account
        </h3>
        <p className="text-[12px] text-gray-400 mb-6">
          Access your school management dashboard
        </p>

        {/* socail button */}
        <div className="flex flex-col gap-3">
          <button className="relative flex items-center justify-center w-full border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm">
            <FaGoogle className="absolute left-4 text-lg text-blue-500" />
            <span>Continue with Google</span>
          </button>

          <div className="flex gap-3">
            <button className="relative flex items-center justify-center w-full border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition-all font-medium text-xs">
              <BsMicrosoft className="absolute left-3 text-blue-500" />
              <span className="ml-4">Microsoft</span>
            </button>

            <button className="relative flex items-center justify-center w-full border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition-all font-medium text-xs">
              <FaLinkedin className="absolute left-3 text-lg text-blue-700" />
              <span className="ml-4">LinkedIn</span>
            </button>
          </div>
        </div>

        <div className="flex items-center my-4 w-full">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-[10px] font-medium uppercase tracking-widest">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="w-full space-y-3">
          <div className="flex flex-col gap-1 relative text-left">
            <h5 className="text-[13px] text-gray-400 font-semibold">
              Username or Email
            </h5>
            <div className="relative">
              <FaUser className="absolute inset-y-0 left-2.5 my-auto text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="username or email"
                className="w-full py-2 pl-9 pr-3 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 outline-none transition-all duration-300
                   focus:border-b-blue-500 focus:text-blue-500 placeholder:text-gray-300"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1 relative text-left">
            <div className="flex justify-between items-center">
              <h5 className="text-[13px] text-gray-400 font-semibold">Password</h5>
              <a href="#" className="text-blue-600 font-bold text-[11px] hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <FaLock className="absolute inset-y-0 left-2.5 my-auto text-gray-400 text-sm" />
              <input
                type="password"
                placeholder="password"
                className="w-full py-2 pl-9 pr-9 text-sm text-gray-800 bg-transparent border-b-2 border-gray-300 outline-none transition-all duration-300
                   focus:border-b-blue-500 focus:text-blue-500 placeholder:text-gray-300"
              />
              <LiaEyeSolid className="absolute inset-y-0 right-2 my-auto text-gray-400 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-left mt-4">
          <input
            type="checkbox"
            className="w-4 h-4 cursor-pointer accent-blue-600 rounded border-gray-300"
          />
          <span className="font-medium text-gray-500 text-xs cursor-pointer select-none">
            Keep me signed in
          </span>
        </div>

        <div className="mt-5">
          <button className="text-white bg-blue-600 w-full py-2 rounded-md hover:bg-blue-700 transition-all duration-300 font-bold text-sm shadow-md">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-center gap-1 mt-4">
          <span className="text-gray-400 text-[11px]">Don't have an account?</span>
          <span className="text-blue-500 font-bold text-[11px] cursor-pointer hover:underline">
            Register
          </span>
        </div>
      </div>
      <div className="mt-6 text-[10px] text-gray-400 text-center">
        © 2026 ETEC CENTER. All rights reserved.
        <ul className="flex justify-center gap-4 mt-2 font-medium">
          <li className="hover:text-gray-600 cursor-pointer">Privacy</li>
          <li className="hover:text-gray-600 cursor-pointer">Terms</li>
          <li className="hover:text-gray-600 cursor-pointer">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;