"use client";
import React, { useState } from "react";
import { Button } from "@/component/button";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-[var(--Shades-Black,#000)]">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md w-full shadow-custom-light">
          <h2 className="text-center text-2xl font-bold text-white mb-6">
            Join Event Chat Room!😄
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="eventName"
              >
                Event Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="eventName"
                type="text"
                placeholder="Enter the event name"
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="w-full"
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                href={`/chat?name=${name}&room=${room}`}
              >
                <Button
                  type="submit"
                  label="Verify Ticket"
                  customClassName=" rounded-lg border-r-2 border-b-4 border-l-2 border-[#5733E6] bg-gradient-to-b from-[#B7A5FF] to-[#643DFF]"
                  size="moreMedium"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
