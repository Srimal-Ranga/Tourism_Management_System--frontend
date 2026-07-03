"use client";

import { useState } from "react";
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const PassengerRegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    console.log("Passenger register:", { firstName, lastName, email, password, agreed });
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Title */}
      <div className="mb-5" style={{ animation: "fadeSlideIn 0.35s ease forwards" }}>
        <div className="flex items-center gap-3 mb-2">
          <span style={{
            background: "#fef2f2", color: "#ef4444",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "3px 10px",
            borderRadius: 999, border: "1px solid #fecaca",
            whiteSpace: "nowrap",
          }}>
            Traveller
          </span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #fca5a5, transparent)" }} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Create your Account</h2>
        <p className="mt-1 text-sm text-gray-500">Welcome! Let's get you exploring Sri Lanka.</p>
      </div>

      {/* Social Logins */}
      <div className="flex gap-3">
        <button className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
        </button>
        <button className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-167.2-111.8C121.5 742 75.3 652.7 75.3 558.4c0-152.6 99.8-233.2 197.8-233.2 63.5 0 116.4 41.8 155.9 41.8 37.8 0 96.8-43.8 166-43.8 24.2 0 108.2 2.2 158.9 92.5zm-209.1-71.4c-20.7 25.6-54.4 45.4-85.8 45.4-4.5 0-9-.6-12.8-1.3-1.3-4.5-1.9-9-1.9-14.1 0-26.2 13.4-53.1 33.5-71.3 26.2-23.1 67.2-39.5 102.5-40.8 1.3 5.1 1.9 10.3 1.9 15.4 0 24.9-10.9 51.8-37.4 66.6z" />
          </svg>
        </button>
        <button className="flex items-center justify-center flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://www.svgrepo.com/show/512120/facebook-176.svg" className="w-5 h-5" alt="Facebook" />
        </button>
      </div>

      <div className="relative flex items-center justify-center my-4">
        <div className="w-full border-t border-gray-200"></div>
        <span className="absolute px-3 bg-white text-gray-400 text-sm">or</span>
      </div>

      {/* Form */}
      <div className="space-y-3">

        {/* First & Last Name */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-300 w-4 h-4" />
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-300 w-4 h-4" />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-300 w-4 h-4" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Password + Confirm */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-300 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-gray-300 hover:text-gray-500">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-300 w-4 h-4" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-2.5 text-gray-300 hover:text-gray-500">
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 mt-0.5 border-gray-300 rounded text-red-500 focus:ring-red-500"
          />
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <Link href="/terms" className="text-red-500 font-medium hover:underline">Terms &amp; Conditions</Link>
            {" "}&amp;{" "}
            <Link href="/privacy" className="text-red-500 font-medium hover:underline">Privacy Policy</Link>
          </span>
        </label>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default PassengerRegisterForm;