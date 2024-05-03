import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ManageQuantity from '../quantity/ManageQuantity';
import { GiShoppingBag } from "react-icons/gi";
import { IoMdEye, IoMdHeart, IoMdInformationCircleOutline } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import Rating from '../rating/Rating';
import useQuantity from '../hooks/useQuantity';

const Card = ({ item, location }) => {
    const { cart, dispatch, quantity } = useQuantity();
    const [favorite, setFavorite] = useState(false);
    const { id, img, heading, price, old_price, rating } = item;

    return (
        <div className='relative border-2 border-slate-200 rounded-lg overflow-hidden min-w-[250px] h-auto shadow-none hover:shadow-xl bg-white'>
            <div className=' relative'>
                <img src={img} alt="" className=' w-full h-[250px] object-cover' />
                <p className={`${favorite ? "block" : "hidden"} absolute left-0 -top-1 text-second text-4xl z-10`}><FaBookmark /></p>

                <div className=' absolute top-0 h-full w-full bg-[#0000007d] opacity-0 hover:opacity-100 transition duration-500'>
                    {
                        cart.some(c => c.id === id) ? (
                            <div className='flex flex-col gap-4 justify-center items-center h-full w-full'>
                                <Link to={`${location}/${id}`} className=' absolute right-1 top-1 text-first text-4xl font-bold'><IoMdInformationCircleOutline /></Link>
                                <p className=' text-first font-bold text-2xl text-center'>{cart.some(c => c.id === id) ? (cart.map(c => c.id === id && c.qty)) : quantity} Item in bag</p>

                                <ManageQuantity id={id} />
                            </div>
                        ) : (
                            <div className='flex gap-4 justify-center items-center h-full w-full'>

                                <Link to={`${location}/${id}`} className='text-black bg-[#EED23FEF] p-2 rounded-full  hover:scale-105 cursor-pointer'><IoMdEye size={18} /></Link>
                                <p className={` bg-[#EED23FEF] p-2 rounded-full  hover:scale-105 cursor-pointer ${favorite && "text-white"}`} onClick={() => setFavorite(favorite => !favorite)}><IoMdHeart size={18} /></p>
                                <p className=' bg-[#EED23FEF] p-2 rounded-full  hover:scale-105 cursor-pointer' onClick={() => dispatch({
                                    type: "ADD_TO_CART",
                                    payload: { id, img, heading, price }
                                })}><GiShoppingBag size={18} /></p>

                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex justify-between items-center bg-[#EED23FE6] px-3 py-1 -translate-y-2 absolute top-[245px] w-full'>
                <Rating rating={rating} />
                <p className='text-[11px] text-gray-600 font-bold'>(20k Reviews)</p>
            </div>
            <div className=' relative px-3 pb-3 pt-5'>
                <h1 className='text-md font-bold text-gray-700 pb-2'>{heading}</h1>
                <p className=' tracking-wider line-through text-gray-400 font-medium border-b-2 border-gray-200 pb-2'>Tk.{old_price}</p>
                <p className=' absolute right-6 top-12 flex items-center text-[10px] bg-gradient-to-r from-orange-200 via-pink-200 to-orange-100 rounded-tr-xl rounded-bl-xl py-1 px-3 font-bold text-gray-600'>{Math.round(((old_price - price) * 100) / old_price)}% Discount</p>

                <div className='grid grid-cols-2 gap-3 mt-3 rounded-sm'>
                    {
                        cart.some(p => p.id === id) ? (
                            <button className=' bg-red-500 text-white rounded-md text-center shadow-lg font-bold py-1 hover:shadow-none' onClick={() => dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: { id, img, heading, price }
                            })}>Remove</button>
                        ) : (
                            <button className=' bg-first text-white rounded-md text-center shadow-lg font-bold py-1 hover:shadow-none' onClick={() => dispatch({
                                type: "ADD_TO_CART",
                                payload: { id, img, heading, price }
                            })}>Add</button>
                        )
                    }

                    <p className=' text-[#4E5998] font-bold rounded-sm  text-center'>Tk. <span className=' text-second'>{price}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card