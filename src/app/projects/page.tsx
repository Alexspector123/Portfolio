import React from 'react';

import { ProjectCard } from '@/components/project/projectcard';

interface Project {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
}

const projectList: Project[] = [
    {
        title: 'Mangadex Clone',
        date: 'Feb 2025 - Present',
        description: 'My personal project to clone Mangadex, a popular manga reading platform.',
        imageUrl: '/mangadex.webp',
        link: 'Alexspector123/mangadex-clone'
    }
]

export default function ProjectsPage() {
  return (
    <div className="p-8 sm:p-20 h-screen">
      <div className="flex flex-col h-full p-4">
        <div className='max-w-xs'>
            <h1 className="text-4xl font-mono 
                            border-b 
                            border-gray-300 
                            py-2
                            inline-block 
                            mb-4">Projects</h1>
                            
        </div>
            <div className='flex justify-center items-end my-auto'>
                {projectList.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                    />
                ))}
            </div>
      </div>
    </div>
  );
}