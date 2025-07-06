import React from 'react'

import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const ProjectCard = (props: ProjectCardProps) => {

    const { title, date, description, imageUrl, link } = props;

    return (
        <div className="flex 
                        h-60 w-full sm:max-w-3xl
                        bg-white 
                        shadow-md 
                        p-6 
                        rounded-lg 
                        border border-gray-200
                        gap-4
                        flex-start">
            <div className="relative 
                            w-1/3 h-full">
                <Image
                    src="/mangadex.webp"
                    alt="Mangadex Screenshot"
                    fill
                    className="object-fill rounded w-full h-full"
                />
            </div>

            <div className="w-2/3 
                            flex flex-col justify-between">
                <div>
                    <div className="text-xl mb-2">{title}</div>
                    <p className="text-sm text-gray-500 mb-1">
                        {date} |
                        <a
                            href={`https://github.com/${link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:underline ml-1"
                        >
                            {link}
                        </a>
                    </p>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </div>

    )
}
