import React from 'react'
import { useParams } from 'react-router-dom'
import { CartState } from '../context/Context';
import Card from '../card/Card';

const CatagoryView = () => {
    const { state: { data } } = CartState();

    const { catagory } = useParams();
    const cat = catagory;

    return (
        <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 my-7'>
            {
                data.map(item => item.catagory === cat && (
                    <Card item={item} location={`/${catagory}`} />
                ))
            }
        </div>
    )
}
export default CatagoryView

