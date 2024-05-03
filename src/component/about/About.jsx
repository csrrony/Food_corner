import React from 'react'
import { FaUserGroup, FaUserGraduate } from "react-icons/fa6";
import { TbBellRinging2Filled } from "react-icons/tb";

const About = () => {

    const data = [
        {
            icon: <FaUserGroup />,
            heading: "12,600 +",
            para: "Marchant Enrolled",
            color: "rose"
        },
        {
            icon: <FaUserGraduate />,
            heading: "30 +",
            para: "Certified Courses",
            color: "green"
        },
        {
            icon: <TbBellRinging2Filled />,
            heading: "100 +",
            para: "Rewards and GitCards",
            color: "yellow"
        }
    ]


    return (
        <div className=' relative bg-first lg:h-[450px] h-auto py-10'>
            <div className=' absolute top-0 left-0 bg-black w-[60%] h-full skew-x-[-20deg] -translate-x-44'></div>

            <div className='relative container flex flex-col lg:flex-row justify-between items-center h-full gap-10'>
                <div className=' space-y-4'>
                    {data.map(({ icon, heading, para, color }) => (
                        <div className=' flex gap-5'>

                            <div className=' relative w-10 rounded-full flex justify-center items-center group'>
                                <span className="relative flex h-10 w-10">
                                    <span className={` group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-${color}-400 opacity-75`}></span>
                                    <span className={`relative inline-flex rounded-full h-10 w-10 bg-${color}-500`}></span>
                                </span>
                                <p className=' absolute top-[33%] text-white text-lg mx-auto'>{icon}</p>
                            </div>
                            <div className=' z-10'>
                                <h1 className=' text-white text-2xl font-semibold'>{heading}</h1>
                                <p className=' text-white font-medium'>{para}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-60 h-60 rounded-full bg-white overflow-hidden border-8 border-first z-10 ring-8 ring-yellow-100 ring-offset-8 ring-offset-yellow-200'>
                    <img src="man.jpg" alt="Man image" />
                </div>

                <div className='w-[30%] z-10 text-white'>
                    <p className=' text-gray-500'>Why Choose Us</p>
                    <h1 className=' text-4xl font-bold text-gray-700'>Become a Marchant</h1>
                    <p className=' my-5 text-gray-500'>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
                    <button className=' bg-white text-gray-600 px-4 pb-2 pt-1 rounded-sm text-sm font-bold shadow-xl hover:shadow-none active:bg-gray-200'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default About