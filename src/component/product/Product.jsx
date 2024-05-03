import React, { useState } from 'react'
import { CartState } from '../context/Context';
import Card from '../card/Card';
import ManageCatagory from '../catagory/ManageCatagory';

const Product = () => {
    const { state: { data } } = CartState();
    const [filtered, setFiltered] = useState(data);


    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-start md:justify-between items-center mb-4 mt-10 container bg-white px-4 py-2 rounded-md'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-700'>Our Products</h1>
                </div>
                <ManageCatagory setFiltered={setFiltered} />
            </div>

            <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 my-7'>
                {
                    filtered.map(item => (
                        <Card item={item} location={"/product"} />
                    ))
                }
            </div>
        </div>
    )
}

export default Product