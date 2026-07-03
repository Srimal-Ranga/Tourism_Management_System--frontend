"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log("Login submitted", { email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Side: Login Form */}
      <div className="flex flex-col justify-center w-full px-8 py-12 lg:w-1/2 md:px-24">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">TBridge</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Log in to your Account</h2>
          <p className="mt-2 text-gray-500">Welcome back! Sign in to your account</p>

          {/* Social Logins */}
          <div className="flex gap-4 mt-8">
            {/* Google */}
            <button
              onClick={() => console.log("Google login")}
              className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            </button>

            {/* Apple — inline SVG so it always renders correctly */}
            <button
              onClick={() => console.log("Apple login")}
              className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-167.2-111.8C121.5 742 75.3 652.7 75.3 558.4c0-152.6 99.8-233.2 197.8-233.2 63.5 0 116.4 41.8 155.9 41.8 37.8 0 96.8-43.8 166-43.8 24.2 0 108.2 2.2 158.9 92.5zm-209.1-71.4c-20.7 25.6-54.4 45.4-85.8 45.4-4.5 0-9-.6-12.8-1.3-1.3-4.5-1.9-9-1.9-14.1 0-26.2 13.4-53.1 33.5-71.3 26.2-23.1 67.2-39.5 102.5-40.8 1.3 5.1 1.9 10.3 1.9 15.4 0 24.9-10.9 51.8-37.4 66.6z" />
              </svg>
            </button>

            {/* Facebook */}
            <button
              onClick={() => console.log("Facebook login")}
              className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/512120/facebook-176.svg" className="w-5 h-5" alt="Facebook" />
            </button>
          </div>

          <div className="relative flex items-center justify-center my-8">
            <div className="w-full border-t border-gray-200"></div>
            <span className="absolute px-3 bg-white text-gray-400 text-sm">or</span>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-300 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-300 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-300 hover:text-gray-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              {/* Forgot Password → app/(auth)/forget-password/page.tsx */}
              <Link
                href="/forget-password"
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Log in
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            {/* Sign Up → app/(auth)/register/page.tsx */}
            <Link href="/register" className="text-red-500 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <img
            src="https://media.gettyimages.com/id/550859245/photo/sri-lanka-sigiriya-lion-rock-fortress.jpg?s=612x612&w=0&k=20&c=2nzws_GI6jLWYzWJ7QvmoaPu24UCohZyD3cB490_H3k="
            alt="Aerial view"
            className="w-full h-full object-cover"
          />
          {/* Slider Pagination Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-6 h-1.5 bg-white/50 rounded-full"></div>
            <div className="w-6 h-1.5 bg-white/50 rounded-full"></div>
            <div className="w-12 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;