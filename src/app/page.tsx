// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {

  return (
    <div className={`flex flex-col justify-center h-screen p-20 dark:bg-black`}>
      <div className="max-w-xl lg:p-30">
        <h1 className="text-4xl font-mono dark:text-white 
                        border-b border-gray-300 
                        pb-1 
                        inline-block 
                        mb-4">
          Hitori
          {/*<Typewriter
            words={['Hitori']}
            loop={1}
            cursor
            typeSpeed={100}
          />*/}
        </h1>
        <p className="text-gray-500 text-lg font-mono dark:text-white
                        whitespace-pre-line leading-relaxed">
          An innovative{"\n"}software developer
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block transition
                     text-sm font-mono text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-300
                     hover:transform hover:translate-x-2
                     duration-300"
        >
          Go through →
        </a>
      </div>
    </div>
  );
}
