import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../../assets/images/register_image.png";
import microsoft from "../../../assets/images/microsoft_image.png";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // FIX 1: Use https and ensure the URL is exactly as the API expects
      const res = await fetch("https://school-management-2-5-main-cdrucp.laravel.cloud/api/register", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // FIX 2: Essential for Laravel APIs
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role_id: 1, 
        }),
      });

      const data = await res.json();

      console.log("Response:", data);

      // FIX 3: res.ok catches any 2xx status code
      if (res.ok) {
        alert("Register Success");
        navigate("/form/login");
      } else {
        // If there's a validation error (like email taken), Laravel sends it in data.errors or data.message
        alert(data.message || "Register Failed");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Network Error: Please check your internet or CORS settings.");
    }
  };

  return (

    <div className="min-h-screen w-full sm:w-[90%] m-auto flex rounded-xl mt-5 justify-center">

      {/* LEFT SIDE */}
      <div className="hidden md:flex lg:w-[40%] relative">
        <img
          src={registerImage} // put your image inside public folder
          alt="Education"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black/70">

        </div>
        <div className="relative z-10 bg-black/30 text-white p-14 flex flex-col justify-center ">
          <div className="mb-6 flex items-center space-x-3">
            <div className="bg-white text-blue-600 p-2 rounded-lg">🎓</div>
            <h2 className="text-xl font-semibold md:text-lg">EduManage Enterprise</h2>
          </div>

          <h1 className="text-3xl xl:text-5xl  font-bold leading-tight mb-6">
            Empowering the <br />
            next generation of <br />
            educators
          </h1>

          <blockquote className="border-l-4 border-white pl-4 italic text-lg opacity-90 mb-6">
            “Education is the most powerful weapon which you can use to change
            the world.”
            <br />
            <span className="text-sm not-italic">— Nelson Mandela</span>
          </blockquote>

          <p className="text-sm opacity-90">
            Joined by 10,000+ academic institutions worldwide
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center">Create account</h2>

          <p className="text-gray-500 mb-6 text-center">
            Already have an account?{" "}
            <Link to="/form/login" className="text-blue-600 font-medium hover:underline">
              Log in
            </Link>
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 border rounded-lg py-2 px-4 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google Account
            </button>

            {/* <button className="flex items-center justify-center gap-2 border rounded-lg py-2 px-4 hover:bg-gray-50 transition">
              <img
                src={microsoft}
                alt="Microsoft"
                className="w-4 h-4"
              />
              Continue with Microsoft Account
            </button> */}
          </div>

          <div className="flex items-center mb-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-gray-600 text-sm">Or sign up with</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="username"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Institutional Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="email@school.edu"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Must be at least 8 characters with a mix of letters and numbers.
              </p>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-xs sm:text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-10">
            ENTERPRISE SCHOOL MANAGEMENT SYSTEM <br />© 2024 EduManage. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
