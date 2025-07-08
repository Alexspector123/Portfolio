import React from 'react'

import { IoMail } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { PiReadCvLogoLight } from "react-icons/pi";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function page() {
  return (
    <div className='p-10 sm:p-20
                    bg-white
                    font-mono'>
      <div className='max-w-[1440px]
                      pt-18 sm:p-8'>
        <div className=''>
          <h2 className="text-2xl font-medium text-gray-800 
                            pb-2
                            mb-4
                            border-b border-gray-200
                            max-w-48"
          >
            About Me
          </h2>
          <div className='flex flex-col gap-20'>
            {/* Information */}
            <div className='w-full'>
              <div className='float-left
                            mr-4
                            max-h-76 sm:max-h-100 md:max-h-[570px]'>
                <div className='relative
                              w-45 sm:w-70 md:w-90 xl:w-150 
                              h-40 sm:h-100 md:h-125
                              '>
                  <img src="avt.jpg"
                    alt=""
                    className='absolute xl:top-0 xl:right-0 
                           max-w-45 max-h-45 sm:max-w-60 sm:max-h-60 md:max-w-75 md:max-h-75 
                            object-cover rounded-md' />
                  <img src="avt2.jpg"
                    alt=""
                    className='hidden sm:block absolute bottom-0 left-0 
                              max-w-40 max-h-40 sm:max-w-60 sm:max-h-60 md:max-w-75 md:max-h-75 
                              object-cover rounded-md' />
                </div>
              </div>
              <div className=''>
                <h3 className='text-xl font-medium mb-2'>Hello, I'm Hitori</h3>
                <p className='text-base text-gray-700'>
                  I am currently a third-year Computer Science student, passionate about software development and problem-solving. My academic journey has equipped me with a solid foundation in programming, algorithms, and system design, while also fostering a deep interest in building scalable and efficient web applications.
                  <br></br>
                  <br></br>
                  Beyond technical knowledge, I bring a strong set of soft skills that enhance both individual and collaborative work environments. I thrive in teamwork, value analytical thinking for solving complex challenges, and communicate ideas clearly with both technical and non-technical audiences. My adaptability allows me to learn quickly and remain effective in fast-paced or changing situations.
                  <br></br>
                  <br></br>
                  I’m comfortable working with both frontend and backend technologies, and I’m always eager to learn more. My goal is to become a full-stack developer who not only builds functional applications but also creates great user experiences. I’m especially interested in working on impactful projects that improve people’s lives and in teams where I can continuously grow by learning from others and contributing meaningfully.
                </p>
              </div>
            </div>
            {/* Hobbies */}
            <div className='w-full'>

              <h3 className='text-xl font-medium mb-2'>My Interest</h3>
              <div className='hidden lg:block float-right
                            ml-4
                            max-h-300 sm:max-h-200 md:max-h-[570px]'>
                <div className='relative
                              w-45 sm:w-50 md:w-130 xl:w-150 
                              h-160 sm:h-175 md:h-120 xl:h-135
                              '>
                  <img src="art.webp"
                    alt=""
                    className='absolute top-55 md:top-5 right-0
                           max-w-45 max-h-45 sm:max-w-70 sm:max-h-70 xl:max-w-75 xl:max-h-75
                            object-cover rounded-md' />
                  <img src="code.png"
                    alt=""
                    className='absolute right-0 md:top-0 md:left-0 
                              max-w-40 max-h-40 sm:max-w-70 sm:max-h-70 xl:max-w-75 xl:max-h-75
                              object-cover rounded-md' />
                  <img src="film.jpg"
                    alt=""
                    className='absolute bottom-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2
                              max-w-50 max-h-50 md:max-w-75 md:max-h-75 xl:max-w-85 xl:max-h-85
                              object-cover rounded-md' />

                </div>
              </div>
              <div className='text-base text-gray-700'>
                <div className='lg:hidden float-right
                            ml-4
                            max-h-250'>
                  <img src="code.png"
                    alt=""
                    className='
                              max-w-40 max-h-40 sm:max-w-50 sm:max-h-50 xl:max-w-75 xl:max-h-75
                              object-cover rounded-md' />
                </div>
                <p>
                  Outside of studying, I enjoy exploring new tools and technologies—especially those related to UI and 3D animations. Thanks to platforms like Facebook and TikTok, I've been inspired to dive deeper into creative coding, spending a lot of time experimenting and learning through building.
                </p>
                <p>
                  I also have a strong passion for diagrams and system architecture. I often read and sketch different system designs to deepen my understanding of how things work under the hood.
                </p>
                <br />
                <div className='lg:hidden float-right
                            ml-4
                            max-h-250
                            flex flex-col
                            items-end'>
                  <img src="art1.webp"
                    alt=""
                    className='max-w-50 max-h-50 md:max-w-65 md:max-h-65 xl:max-w-75 xl:max-h-75
                                object-cover rounded-md' />
                </div>
                <p>
                  When I feel burnt out or need creative inspiration, I turn to art. Whether it's admiring paintings to explore color combinations or reading manga, I find visual storytelling incredibly powerful. My preference for minimalist design is largely influenced by manga panels—they're simple but rich in detail and composition.
                </p>
                <br />
                <br className='lg:hidden hidden md:block' />
                <div className='lg:hidden float-right
                            ml-4
                            max-h-250'>
                  <img src="film.jpg"
                    alt=""
                    className='
                              max-w-50 max-h-50 md:max-w-65 md:max-h-65 xl:max-w-75 xl:max-h-75
                              object-cover rounded-md' />
                </div>
                <p>
                  I'm also a huge fan of movies. While I mostly watch them for entertainment,I occasionally find myself analyzing screen layouts and cinematography. One of my biggest inspirations is Akira Kurosawa—I’ve watched all of his films, and his mastery of framing and movement has greatly influenced how I think about visual design and structure.
                </p>
              </div>
            </div>

            <div className='w-full p-4'>

              <div className='flex justify-center'>
                <div className='inline-flex gap-15 items-center
                              border-4 rounded-2xl
                              py-5 px-10'>
                  <h3 className="text-2xl font-medium text-gray-800"
                  >
                    Let's connect
                  </h3>
                  <div className='flex flex-col gap-6'>
                    <div className='flex items-center'>
                      <IoMail className='h-5 w-5' />
                      <div className='ml-4'>
                        <h4 className='text-[18px]'>Email</h4>
                        <p className='text-base text-gray-500'>huyphantranthanh@gmail.com</p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <FaLocationDot className='h-5 w-5' />
                      <div className='ml-4'>
                        <h4 className='text-[18px]'>Location</h4>
                        <p className='text-base text-gray-500'>Ho Chi Minh City, VietNam</p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <IoShareSocialSharp className='h-5 w-5' />
                      <div className='ml-4 flex gap-2'>
                        <a href="https://linkedin.com/in/huythanhphan"
                          target='_blank'>
                          <AiFillLinkedin className='h-8 w-8' />
                        </a>
                        <a href="https://github.com/Alexspector123"
                          target='_blank'>
                          <RiGithubFill className='h-8 w-8' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative
                            mt-17
                            flex justify-end"
        >
          <a
            href="/"
            className="absolute left-0
                                flex items-center 
                                text-gray-700 hover:text-gray-900
                                hover:-left-3
                                cursor-pointer 
                                !rounded-button
                                duration-300"
          >
            &larr; Go back Home
          </a>
        </div>
      </div>
    </div>
  )
}
