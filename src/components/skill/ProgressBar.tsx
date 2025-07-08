import React from 'react'

interface ProgressBarProps {
    name: string;
    progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { name, progress } = props;

    return (
        <div>
            <div className='mb-1 text-base dark:text-white'>{name}</div>
            <div className='w-30 lg:w-40 h-5
                            mb-3 dark:text-white
                            rounded-full
                            border-2'>
                <div className='h-full
                                rounded-full
                                bg-black
                                dark:bg-white'
                     style={{ width: `${progress}%` }}>

                </div>

            </div>
        </div>
    )
}
