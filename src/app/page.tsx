// app/page.tsx
"use client";

import { useEffect, useState } from "react";

import { Typewriter } from "react-simple-typewriter";


export default function Home() {

  return (
    <div className="p-8 sm:p-20 h-screen">
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-xl">
          <h1 className="text-4xl font-mono border-b border-gray-300 pb-1 inline-block mb-4">
            Hitori
            {/*<Typewriter
            words={['Hitori']}
            loop={1}
            cursor
            typeSpeed={100}
          />*/}
          </h1>
          <p className="text-gray-500 text-lg font-mono whitespace-pre-line leading-relaxed">
            An innovative{"\n"}software developer
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-sm font-mono text-gray-600 hover:text-black transition"
          >
            Go through →
          </a>
        </div>
      </div>

    </div>
  );
}
