import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-bounce">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          We are working hard to bring you something amazing!
        </p>
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 opacity-50 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 opacity-50 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 opacity-75"></div>
        </div>
        <p className="mt-12 text-lg">Stay tuned for updates!</p>
      </div>
    </div>
  );
};

export default Page;
