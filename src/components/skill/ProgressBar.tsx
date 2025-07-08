import React from 'react'

interface ProgressBarProps {
    name: string;
    progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { name, progress } = props;

    return (
        <div>
            <div className='mb-1 text-base'>{name}</div>
            <div className='w-30 lg:w-40 h-5 
                            mb-3
                            rounded-full
                            border-2'>
                <div className='h-full
                                rounded-full
                                bg-black'
                     style={{ width: `${progress}%` }}>

                </div>

            </div>
        </div>
    )
}
