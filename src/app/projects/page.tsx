"use client";

import React from 'react';

import { ProjectCard } from '@/components/project/ProjectCard';

import PageTransition from '@/components/page/PageTransition';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
  type: string;
}

const projectList: Project[] = [
  {
    title: 'Mangadex Clone',
    date: 'Feb 2025 - Present',
    description: 'My personal project to clone Mangadex, a popular manga reading platform.',
    imageUrl: '/mangadex.webp',
    link: 'Alexspector123/mangadex-clone',
    type: 'Personal Project',
  }
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="h-screen p-10 pb-15 sm:p-20
                  bg-white dark:bg-black
                    font-mono">
        <div className="max-w-[1440px]
                      mx-auto 
                      flex flex-col"
        >
          <main className="flex-grow 
                          pt-18
                          sm:p-8"
          >
            <div className="max-w-4xl 
                          mx-auto"
            >
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white
                            pb-2 
                            border-b border-gray-200
                            max-w-48"
              >
                Projects
              </h2>
              <div className="mt-12
                            space-y-16"
              >
                {projectList.map((project, index) => (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: [0.33, 1, 0.68, 1],
                      type: "tween"
                    }}
                    key={index} className="group">
                    <ProjectCard
                      title={project.title}
                      date={project.date}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      link={project.link}
                      type={project.type}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative
                            mt-10
                            sm:mt-17
                            flex justify-end h-8"
            >
              <a
                href="/experience"
                className="absolute right-0
                                flex items-center 
                                text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-300
                                hover:-right-3
                                cursor-pointer 
                                !rounded-button
                                duration-300"
              >
                Next &rarr;
              </a>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}