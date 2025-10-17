'use client'

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-pattern text-gray-900 h-screen overflow-x-hidden">
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20  
      bg-gradient-to-b from-emerald-900 to-[#00885df7] text-white relative overflow-hidden">
        <div className="md:w-1/2 z-10">
          <Image
            src="/logowhite.png"
            alt="Inkspire Logo"
            width={350}
            height={350}
            className="mb-6 mt-10"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Inkspire
          </h1>
          <p className="text-lg mb-8 text-gray-100 leading-relaxed">
            Unleash your creativity, share your ideas, and craft your next blog article
            with elegance and inspiration.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="bg-white text-emerald-800 font-semibold px-6 py-3 rounded-md 
              shadow-md hover:bg-gray-100 transition-all"
            >
              Start Writing
            </Link>
            <Link
              href="/register"
              className="border border-white text-white px-6 py-3 rounded-md
               hover:bg-white hover:text-emerald-800 transition-all"
            >
              Explore Blogs
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
            <Image
              src="/forground.jpg"
              alt="Inkspire showcase"
              width={450}
              height={650}
              className="object-cover"
            />
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Page;