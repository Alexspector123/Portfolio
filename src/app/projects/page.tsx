import React from 'react';

import { ProjectCard } from '@/components/project/ProjectCard';

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
    <div className="h-screen p-20
                  bg-white 
                    font-mono">
      <div className="max-w-[1440px]
                      mx-auto 
                      flex flex-col"
      >
        <main className="flex-grow 
                          pt-8
                          sm:p-8"
        >
          <div className="max-w-4xl 
                          mx-auto"
          >
            <h2 className="text-2xl font-medium text-gray-800 
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
                <div key={index} className="group">
                  <ProjectCard
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    type={project.type}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative
                            mt-17
                            flex justify-end"
          >
            <a
              href="/experience"
              className="absolute right-0
                                flex items-center 
                                text-gray-700 hover:text-gray-900
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
  );
}