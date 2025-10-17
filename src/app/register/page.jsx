"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const Payload = {
    firstName,
    lastName,
    email,
    password,
  };
  const handleRegister = () => {
    if (!email || !firstName || !lastName || !password) {
      toast.error('Please fill all fields')
      return;
    }
    console.log("Received Data : ", Payload);
    // send the payload to the localStorage
    localStorage.setItem("user", JSON.stringify(Payload));
    toast.success("Registered Successfully!");
    redirect('/home')
  };

  return (
    <div className="h-screen overflow-hidden w-full flex items-center justify-center">
      <ToastContainer position='top-center' />
      <div
        className="flex h-[700px] w-[900px] ring ring-emerald-700 shadow-lg bg-white
       rounded-lg overflow-hidden"
      >
        <div
          className="w-1/2 bg-emerald-800 flex items-center justify-center
         overflow-hidden relative "
        >
          <Image
            src="/register.jpg"
            alt="Login"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2 p-8">
          <Image
            src="/logo.png"
            alt="Inkspire Logo"
            width={150}
            height={150}
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">Join us</h2>
          <p className=" mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            neque.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                First Name
              </label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Last Name
              </label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="button"
              onClick={()=>handleRegister()}
              className="w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition"
            >
              Register
            </button>
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-800 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
