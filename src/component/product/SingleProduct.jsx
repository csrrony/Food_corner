import React from 'react'
import { CartState } from '../context/Context';
import { useParams, Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import { GrDeliver } from "react-icons/gr";
import { MdHighQuality, MdAccessTimeFilled } from "react-icons/md";
import { SinglePageQuantity } from '../quantity/ManageQuantity';

const SingleProduct = () => {
    const { state: { data, cart }, dispatch } = CartState();

    const params = useParams();
    const id = Number(params.id);
    const value = data.find(item => item.id === id);
    const { img, heading, price, old_price, desc, measurement, rating } = value;


    const benefits = [
        {
            icon: <GrDeliver />,
            heading: "Fast delivery"
        },
        {
            icon: <MdHighQuality />,
            heading: "High quality"
        },
        {
            icon: <MdAccessTimeFilled />,
            heading: "Get on time"
        }
    ]

    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 py-6 gap-6 container'>
                <div className=' h-[450px] w-full'>
                    <img src={`/${img}`} alt="img" className=' bg-cover h-full w-full rounded' />
                </div>

                <div className='text-gray-600'>
                    <h1 className=' text-3xl font-bold font-serif'>{heading}</h1>
                    <div className='flex gap-3 items-center my-2'>
                        <Rating rating={rating} color="first" size="lg" />
                        <p className='text-sm font-medium'>(20k customer reviews)</p>
                    </div>
                    <div className='flex gap-16 items-center'>
                        <p className=' font-medium text-gray-500'>MRP: <span className=' line-through'>{old_price}/{measurement}</span></p>
                        <p className='flex items-center text-[10px] bg-gradient-to-r from-orange-200 via-pink-200 to-orange-100 rounded-tr-xl rounded-bl-xl py-1 px-3 font-bold text-gray-600'>{Math.round(((old_price - price) * 100) / old_price)}% Discount</p>
                    </div>
                    <p className=' text-indigo-500 text-xl font-bold'>Tk. <span className=' text-first'>{price}/{measurement}</span></p>
                    <p className=' font-medium w-[80%] my-2'>{desc}</p>
                    <div className='flex justify-start items-center gap-6 py-4 border-b-2 border-first w-[90%]'>
                        {
                            benefits.map(({ icon, heading }, i) => (
                                <div className='flex flex-col justify-center items-center gap-2' key={i}>
                                    <p className=' text-3xl text-first'>{icon}</p>
                                    <h1 className=' font-bold font-serif text-indigo-500'>{heading}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <SinglePageQuantity id={id} />
                    <Link>
                        {
                            cart.some(p => p.id === id) ? (
                                <button className=' bg-first text-gray-700 rounded-md text-center shadow-lg font-bold px-4 py-2 mt-4 hover:shadow-none' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } })}>Remove from cart</button>
                            ) : (

                                <button className=' bg-first text-gray-700 rounded-md text-center shadow-lg font-bold px-4 py-2 mt-4 hover:shadow-none' onClick={() => dispatch({ type: "ADD_TO_CART", payload: { id, img, heading, price } })}>+ Add to cart</button>
                            )
                        }

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default SingleProduct