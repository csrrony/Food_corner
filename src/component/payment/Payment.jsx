import React, { useEffect, useState } from 'react'
import useQuantity from '../hooks/useQuantity';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CartState } from '../context/Context';


const formSchema = z.object({
    mame: z.string(),
    email: z.string().email("Email is not valid"),
    address: z.string(),
    card_number: z.number(),
    date: z.string(),
    cvc: z.number()
})
const Payment = () => {
    const { state: { shipping } } = CartState();
    const { cart, quantity } = useQuantity();
    const [subTotal, setSubTotal] = useState();
    const { register, handleSubmit } = useForm({
        defaultValues: { email: '', card_number: null, date: null, cvc: null },
        resolver: zodResolver(formSchema)
    });


    const submit = (data) => {
        alert('Your payment complete.')
        console.log(data)
    }

    const navigate = useNavigate();


    const PerProductTotal = (price, qty) => {
        return (Number(price) * qty);
    }


    useEffect(() => {
        setSubTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [quantity, cart])

    return (
        <div className='bg-white'>
            <div className="container grid grid-cols-1 lg:grid-cols-2 py-10 lg:space-x-20 space-y-20 lg:space-y-0">
                <div className='relative border-b-4 lg:border-b-0 lg:border-r-4 border-gray-200 lg:min-h-[70vh] lg:pr-8 pb-8 lg:pb-0 '>
                    <button onClick={() => navigate(-1)} className=' border border-gray-300 rounded-full p-2 hover:bg-gray-200'><FaArrowLeft /></button>
                    <p className=' text-2xl font-bold text-gray-600 my-5'>Tk. {Number(subTotal).toFixed(2)}
                    </p>
                    <div>
                        {
                            cart?.map(({ heading, qty, price }) => (
                                <div className='flex justify-between items-center border-b border-gray-300 py-2'>
                                    <div>
                                        <h1 className=' font-bold text-sm text-gray-500'>{heading}</h1>
                                        <p className=' text-gray-400'>Qty {qty}</p>
                                    </div>
                                    <div>
                                        <p className=' text-sm font-bold text-gray-500'>Tk. {PerProductTotal(price, qty)}</p>
                                        <p className=' text-gray-400'>Tk. {price && price} each</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
                <div>
                    <h1 className=' text-xl font-bold text-gray-500'>Pay with card</h1>
                    <p className=' font-semibold text-gray-500'>Shipping information</p>
                    <form action="" onSubmit={handleSubmit(submit)} className=' w-[60%]'>



                        <div className=' w-full flex flex-col gap-2 my-3'>
                            <label htmlFor="" className=' font-bold text-sm text-gray-400'>Name</label>
                            <input type="text"
                                {...register('name')}
                                className='p-2  border text-sm font-medium border-gray-200 shadow-md outline-none' />
                            <label htmlFor="" className=' font-bold text-sm text-gray-400'>Email</label>
                            <input type="text"
                                {...register('email')}
                                className='p-2  rounded text-sm font-medium border border-gray-200 shadow-md outline-none' />
                        </div>
                        <div>
                            <h1 className=' font-bold text-sm text-gray-400 my-3'>Shipping address</h1>
                            <input type="text"
                                {...register('address')}
                                className='p-2 w-full text-sm font-medium  rounded border border-gray-200 shadow-md outline-none' placeholder='Address' />
                            {
                                shipping.map(({ address }, i) => (
                                    <div key={i} className=' w-full flex grow-1 mb-3'>

                                        <input type='text' className='p-2 bg-gray-100 border-b font-medium border-gray-200  rounded-l text-sm' value={(address?.state, address?.zip)} />
                                        <div className='p-2 bg-gray-100 rounded-r font-medium text-sm'>{address?.country}</div>
                                    </div>
                                ))
                            }
                        </div>


                        <div>
                            <h1 className=' font-bold text-lg text-gray-500'>Payment details</h1>
                            <div>
                                <label htmlFor="" className=' font-bold text-sm text-gray-400'>Card information</label>
                                <div className='flex w-full rounded mt-3'>
                                    <input type="text" className=' w-full rounded-t p-2 border border-gray-300 outline-none text-gray-400 font-medium text-sm tracking-wider' placeholder='1234 1234 1234 1234' {...register('card_number')} />
                                    <img src="" alt="" />
                                </div>
                                <div className='grid grid-cols-2 w-full'>
                                    <input type="text" className=' border p-2 w-full rounded-bl border-gray-300 outline-none text-gray-400 font-medium text-sm tracking-wider' placeholder='MM/YY' {...register('date', {
                                        pattern: /[0-9]\/[0-9]/,
                                        message: 'This date is not valid.'
                                    })} />
                                    <div>
                                        <input type="text" className=' w-full p-2 rounded-br border border-gray-300 outline-none text-gray-400 font-medium text-sm tracking-wider' placeholder='CVC' {...register('cvc')} />
                                        <img src="" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex gap-2 items-center mt-4 text-sm font-medium text-gray-400'>
                            <input type="checkbox" name="" id="" className=' w-4 h-4' />
                            <p>Billing address is same as shipping</p>
                        </div>
                        <button type='submit' className=' bg-primary hover:bg-blue-400 text-white text-center text-sm font-bold tracking-wider py-2 w-full rounded-md my-4'>Pay</button>
                    </form>
                </div>
            </div>
            <div className=' flex gap-3 items-center justify-start text-gray-500 my-10  font-semibold'>
                <p className=' text-lg pr-3 border-r-2 border-gray-400'>Powered by <span className=' font-bold'>E-shop</span></p>
                <Link className=' hover:text-primary'>Terms</Link>
                <Link className=' hover:text-primary'>Privacy</Link>
            </div>
        </div>
    )
}

export default Payment