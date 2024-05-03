import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CartState } from '../context/Context';
import { Link } from "react-router-dom";
const Search = () => {
  const [inputValue, setInputValue] = useState("")
  const { state: { data } } = CartState()

  const filtered = data.filter(({ heading }) => heading.toLowerCase().includes(inputValue));
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-[500px] container'>
      <p className=' w-[80%] md:w-[50%] mx-auto capitalize text-center text-4xl font-serif z-10'>Search your one from <span className='text-[#EED23F]'>thousand</span> of products</p>
      <div className='relative flex items-center justify-center w-[80%] md:w-[50%] z-10'>
        <input type="text" className=' w-full mx-auto bg-white shadow-md text-gray-600 outline-none rounded-3xl py-2 px-3 font-semibold placeholder:text-sm' placeholder='Search Product...'
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        />
        <IoIosSearch className='absolute top-[10px] right-3 text-gray-600 text-xl' />
      </div>
      <p className=' text-gray-400 text-sm text-center font-medium z-10'>We have the largest collection of product</p>
      <div className=' overflow-y-auto w-[350px] no-scrollbar'>
        {
          inputValue && filtered.map(({ id, img, heading, price }) => (
            <Link to={`/product/${id}`} key={id}>
              <div className='flex gap-2 my-2 justify-between items-center border-b-2 border-gray-200 text-gray-400 bg-white rounded p-3 font-bold'>
                <div className='flex items-center gap-3'>
                  <img src={img} alt="" className=' w-12 h-12 rounded' />
                  <h1>{heading}</h1>
                </div>
                <p>{price} tk</p>
              </div>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Search