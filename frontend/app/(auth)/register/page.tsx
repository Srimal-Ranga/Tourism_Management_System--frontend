"use client";

import { useState } from "react";
import Link from "next/link";
import PassengerRegisterForm from "@/app/(auth)/register/passenger/passngerRegister";
import TourGuideRegisterForm from "@/app/(auth)/register/tour_guide/tourguideRegister";

const RegisterPage = () => {
  // ✅ Passenger is the default tab on load
  const [activeTab, setActiveTab] = useState<"passenger" | "tourguide">("passenger");

  return (
    <div className="flex min-h-screen bg-white font-sans">

      {/* ── Left Side ── */}
      <div className="flex flex-col justify-center w-full px-8 py-10 lg:w-1/2 md:px-16">
        <div className="max-w-md mx-auto w-full">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">TBridge</span>
          </div>

          {/* Tab Toggle */}
          <div className="flex border border-gray-200 rounded-lg p-1 mb-5">
            <button
              onClick={() => setActiveTab("passenger")}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                activeTab === "passenger"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Passenger
            </button>
            <button
              onClick={() => setActiveTab("tourguide")}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                activeTab === "tourguide"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Tour Guide
            </button>
          </div>

          {/* ✅ Swap between the two form components */}
          {activeTab === "passenger" ? (
            <PassengerRegisterForm />
          ) : (
            <TourGuideRegisterForm />
          )}

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 font-bold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* ── Right Side: Image ── */}
      <div className="hidden lg:block lg:w-1/2 relative p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <img
            src="https://images.pexels.com/photos/33404366/pexels-photo-33404366.jpeg"
            alt="Tea plantation"
            className="w-full h-full object-cover"
          />
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

export default RegisterPage;