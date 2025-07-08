// app/page.tsx
"use client";

import { motion } from "framer-motion";

import PageTransition from "@/components/page/PageTransition";

export default function Home() {

  return (
    <PageTransition>
      <div className={`flex flex-col justify-center h-screen p-20 dark:bg-black`}>
        <div className="max-w-xl lg:p-30">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.33, 1, 0.68, 1],
              type: "tween"
            }}>
            <h1 className="text-4xl font-mono dark:text-white 
                        border-b border-gray-300 
                        pb-1 
                        inline-block 
                        mb-4">
              Hitori
            </h1>
            <p className="text-gray-500 text-lg font-mono dark:text-white
                        whitespace-pre-line leading-relaxed">
              An innovative{"\n"}software developer
            </p>
          </motion.div>
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
    </PageTransition>

  );
}
