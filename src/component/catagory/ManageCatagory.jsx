import React, { useState } from 'react'
import { CartState } from '../context/Context';

const ManageCatagory = ({ setFiltered }) => {
    const { state: { data } } = CartState();
    const [selectedCatagory, setSelectedCatagory] = useState("All")

    const handleCatagory = (cat) => {
        let filteredProduct = data.filter(({ catagory }) => catagory === cat)
        setFiltered(filteredProduct)
        setSelectedCatagory(cat)
    }
    return (
        <div className='flex mt-3 md:mt-0 flex-wrap gap-3'>
            <button className={`px-3 text-[12px] py-1 font-medium text-slate-500 ${selectedCatagory == "All" ? "bg-first" : "bg-gray-200"} hover:bg-first rounded-md`} onClick={() => (setFiltered(data), setSelectedCatagory("All"))} >All</button>
            {
                data.map(({ catagory }, i) => (
                    <button className={`px-3 text-[12px] py-1 font-medium text-slate-500 ${selectedCatagory == catagory ? "bg-first" : "bg-gray-200"} hover:bg-first rounded-md`} key={i} onClick={() => handleCatagory(catagory)}>{catagory}</button>
                ))
            }
        </div>
    )
}

export default ManageCatagory