"use client";

import React, { useState } from "react";
import { MapPin, Chrome, Apple, Facebook } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SecondTourguideRegister: React.FC = () => {
  const router = useRouter();

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    // Save step 2 data for use in step 3
    sessionStorage.setItem(
      "tourguide_step2",
      JSON.stringify({ streetAddress, city, zipCode })
    );
    // Navigate to step 3
    router.push("/register/tour_guide/ThirdTourguideRegister");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">

      {/* LEFT COLUMN: FORM */}
      <div className="flex w-full flex-col px-8 py-10 md:w-1/2 lg:px-24">

        {/* Logo */}
        <div className="mb-12 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
            <div className="h-5 w-5 rounded-bl-full bg-white opacity-80"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight">TBridge</span>
        </div>

        {/* User Type Switcher — locked on Tour Guide */}
        <div className="mb-8 flex rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => router.push("/register")}
            className="flex-1 rounded-lg py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-all"
          >
            Passenger
          </button>
          <button className="flex-1 rounded-lg bg-white py-2.5 text-sm font-semibold shadow-sm transition-all">
            Tour Guide
          </button>
        </div>

        {/* Heading + Step 2 Progress */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span style={{
              background: "#f0fdf4", color: "#16a34a",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", padding: "3px 10px",
              borderRadius: 999, border: "1px solid #bbf7d0",
              whiteSpace: "nowrap",
            }}>Tour Guide</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #86efac, transparent)" }} />
          </div>
          <h1 className="text-3xl font-bold">Address Details</h1>
          <p className="mt-1 text-sm text-slate-500 font-medium">Step 2 of 3 — Address</p>
          <div className="mt-4 flex gap-2">
            <div className="h-1.5 w-16 rounded-full bg-red-500"></div>
            <div className="h-1.5 w-16 rounded-full bg-red-500"></div>
            <div className="h-1.5 w-16 rounded-full bg-slate-200"></div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="mb-8 flex gap-4">
          <button className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
            <Chrome className="h-5 w-5 text-red-500" />
          </button>
          <button className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
            <Apple className="h-5 w-5" />
          </button>
          <button className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
            <Facebook className="h-5 w-5 text-blue-600" />
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">or</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">Street Address</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="123 Main Street"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-[2]">
              <label className="mb-2 block text-sm font-bold text-slate-700">City</label>
              <input
                type="text"
                placeholder="Colombo"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3.5 px-4 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-bold text-slate-700">Zip Code</label>
              <input
                type="text"
                placeholder="123"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3.5 px-4 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-red-500 focus:ring-red-500"
            />
            <label htmlFor="terms" className="text-sm text-slate-600 leading-snug">
              I agree to the{" "}
              <Link href="/terms" className="text-red-500 underline">Terms &amp; Conditions</Link>
              {" "}&amp;{" "}
              <Link href="/privacy" className="text-red-500 underline">Privacy Policy</Link>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 rounded-xl border border-slate-200 py-4 font-bold hover:bg-slate-50 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="flex-1 rounded-xl bg-black py-4 font-bold text-white hover:bg-slate-800 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-medium text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline font-bold">Log in</Link>
        </p>
      </div>

      {/* RIGHT COLUMN: IMAGE */}
      <div className="hidden md:block md:w-1/2 p-4">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1470&auto=format&fit=crop"
            alt="Tea Plantation"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="h-1.5 w-6 rounded-full bg-white/40"></div>
            <div className="h-1.5 w-10 rounded-full bg-white"></div>
            <div className="h-1.5 w-6 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SecondTourguideRegister;