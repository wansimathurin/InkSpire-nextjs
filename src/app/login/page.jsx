import Image from "next/image";
import React from "react";
import Link from 'next/link'

const page = () => {
  return (
    <div className="h-screen  overflow-hidden w-full flex items-center justify-center">
      <div className="flex h-[600px] ring ring-emerald-700 w-[900px] shadow-lg bg-white rounded-md overflow-hidden">
        <div className="w-1/2 p-8">
          <Image
            src="/logo.png"
            alt="Inkspire Logo"
            width={200}
            height={200}
            className="mb-6 mt-10"
          />
          <h2 className="text-2xl font-semibold mb-6">Login to Your Account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition"
            >
              Login
            </button>
            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link href="/register" className="text-emerald-800 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-emerald-800 flex items-center justify-center overflow-hidden">
          <img
            src="/login.jpg"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
