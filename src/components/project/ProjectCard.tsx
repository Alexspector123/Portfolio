import React from 'react'

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
    type: string;
}

export const ProjectCard = (props: ProjectCardProps) => {

    const { title, date, description, imageUrl, link, type } = props;

    return (
        <div className="flex flex-col md:flex-row gap-2 sm:gap-8
                        p-2
                        transition-all duration-300 hover:translate-x-1
                        shadow-md rounded-lg">
            <div className="w-full md:w-1/3 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[250px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                    {date}
                </p>
                <p className="text-gray-700">{type}</p>
                <div className="mt-4">
                    <a
                            href={`https://github.com/${link}`}
                            target="_blank"
                            className="text-sm text-gray-700 hover:text-gray-900 flex items-center cursor-pointer !rounded-button whitespace-nowrap"
                        >
                            View details &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}
