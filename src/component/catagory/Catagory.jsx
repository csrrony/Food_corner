import React from 'react'
import { CartState } from '../context/Context'
import { FaWindows } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Catagory = () => {
    const { state: { data } } = CartState();

    return (
        <div className=' bg-white py-5'>
            <div className='text-center my-10'>
                <p className=' text-first uppercase tracking-[5px] font-bold'>Choose any products</p>
                <h1 className=' text-3xl sm:text-4xl text-black font-bold'>Buy Everything with Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container'>
                {
                    data.map(({ img, catagory }, i) => (
                        <Link to={`/${catagory}`} key={i}>
                            <div className=' overflow-hidden relative hover:-translate-y-2 transition duration-500' key={i}>
                                <img src={img} alt="" className='w-full h-[300px]' />
                                <div className=' absolute w-full h-full top-0 bg-gradient-to-b from-transparent to-[#47576EEF]'></div>
                                <div className='flex absolute bottom-4 left-4 z-[5] gap-2 items-center'>
                                    <p className=' bg-first rounded-full p-2 w-auto h-auto'><FaWindows className='text-xl' /></p>
                                    <h1 className='text-white font-bold'>{catagory}</h1>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className=' text-center my-10'>
                <button className=' px-5 py-2 font-bold border-first hover:bg-first cursor-pointer border-2 rounded-lg text-gray-600'>Get Started Now</button>
            </div>
        </div>
    )
}

export default Catagory