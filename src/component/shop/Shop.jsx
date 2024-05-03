import React, { useState } from 'react'
import { CartState } from '../context/Context';
import { IoIosSearch } from "react-icons/io";
import Card from '../card/Card';
import ManageCatagory from '../catagory/ManageCatagory';


const Shop = () => {
    const { state: { data } } = CartState();
    const [filtered, setFiltered] = useState(data);


    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        const searched = data.filter(({ heading }) => heading.toLowerCase().includes(value));
        setFiltered(searched);
    }


    return (
        <div className=' container flex flex-col  lg:grid grid-cols-4 gap-2'>
            <div className=' order-2 lg:order-none col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center gap-4 my-7'>
                {
                    filtered.map(item => (
                        <Card item={item} location={"/shop"} />
                    ))
                }
            </div>

            <div className='order-1 lg:order-none w-full lg:col-span-1 flex flex-col justify-start  mb-4 mt-10 container bg-white px-4 py-3 rounded-md'>
                <div className='relative flex items-center justify-center my-2 pb-7 border-b-2 border-yellow'>
                    <input type="text" onChange={handleChange} className=' w-full mx-auto bg-slate-100 shadow-md text-gray-600 outline-none rounded-3xl py-2 pl-3 pr-9 font-semibold placeholder:text-sm' placeholder='Search Product...' />
                    <IoIosSearch className='absolute top-[10px] right-3 text-gray-600 text-xl' />
                </div>

                <div className=' mb-4'>
                    <h1 className='text-2xl font-bold text-gray-700'>Our Products</h1>
                </div>
                <ManageCatagory setFiltered={setFiltered} />
            </div>
        </div>
    )
}

export default Shop