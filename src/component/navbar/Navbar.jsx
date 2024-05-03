import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CartState } from '../context/Context';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const { state: { cart } } = CartState();
    const [menu, setMenu] = useState(false);
    const [login] = useState(false);

    return (
        <div className='px-[10%] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 p-2  sticky top-0 z-50 bg-[#ffffffE6]'>
            <div className='flex justify-start items-center gap-2'>
                <div className='block lg:hidden'>
                    {
                        menu ? <IoMdClose className='font-bold text-xl text-gray-600 cursor-pointer' onClick={() => setMenu(!menu)} /> : <HiMiniBars3BottomLeft className='font-bold text-xl text-gray-600 cursor-pointer' onClick={() => setMenu(!menu)} />
                    }
                </div>
                <p className=' font-bold text-xl text-first uppercase'><span className='text-[#4E5998]'>E-</span>Shop</p>
            </div>
            <div className={`${menu && "translate-y-full mt-[51px]"} absolute top-[-100vh] transition ease-in-out duration-500 lg:transition-none lg:relative left-0 w-full bg-[#0000007d] h-screen block lg:hidden`} onClick={() => setMenu(!menu)}></div>
            <ul className={`${menu && "translate-y-full mt-[51px]"} absolute top-[-100vh] lg:relative lg:top-0 left-0 transition ease-in-out duration-500 lg:transition-none flex flex-col lg:flex-row w-[300px] h-screen lg:w-full lg:h-full justify-around items-center bg-gradient-to-b from-cyan-50 via-fuchsia-100 to-rose-50 lg:bg-none`}>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => `
                ${isActive ? "text-first" : "text-gray-600"} font-bold`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/shop'} className={({ isActive }) => `
                ${isActive ? "text-first" : "text-gray-600"} font-bold`}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className={({ isActive }) => `
                ${isActive ? "text-first" : "text-gray-600"} font-bold`}>Contact</NavLink>
                </li>
            </ul>

            <div className='flex justify-end items-center gap-3 col-span-2 md:col-span-1'>
                {
                    login ?
                        <div className='flex justify-center items-center gap-4'>
                            <div className={`p-2 ${login && "p-0"} border border-gray-600 rounded-full overflow-hidden`}>
                                {
                                    login ? <img src="hero/almond.jpg" alt="" className=' w-[36px] h-[36px] object-cover ' /> : <AiOutlineUser className='text-lg' />
                                }


                            </div>
                            <div>
                                <Link to={"/cart"} className='flex relative border rounded-full border-gray-600 p-2'>
                                    <AiOutlineShoppingCart className=' text-gray-600 text-lg' />
                                    <span className='absolute top-0 -right-2 text-[10px] bg-red-500 px-[5px] rounded-full font-bold text-white'>{cart.length}</span>
                                </Link>
                            </div>
                        </div> :
                        <div className='flex justify-center items-center gap-4'>
                            <button className=' bg-first text-gray-600 text-center px-3 py-1 rounded-md font-bold'>Create Account</button>
                            <button className=' text-gray-600 font-bold'>Log In</button>
                            <div>
                                <Link to={"/cart"} className='flex relative border rounded-full border-gray-600 p-2'>
                                    <AiOutlineShoppingCart className=' text-gray-600 text-lg' />
                                    <span className='absolute top-0 -right-2 text-[10px] bg-red-500 px-[5px] rounded-full font-bold text-gray-600'>{cart.length}</span>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar