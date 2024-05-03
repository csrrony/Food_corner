import React from 'react'
import useQuantity from '../hooks/useQuantity';


//manage quantity with particular style for single page
export const SinglePageQuantity = ({ id }) => {
  const { cart, dispatch, quantity, handleQuantity } = useQuantity();

  return (
    <div>
      <div className='flex font-bold text-center text-xl text-gray-600 ring-2 rounded-md ring-gray-300 w-[104px] mt-6 mb-4'>
        <button onClick={() => handleQuantity(id, -1)} className='text-xl bg-gray-200 active:bg-gray-300 rounded-l-md w-8 h-8 pb-[3px]'>-</button>

        <p onChange={(e) => dispatch({
          type: "CHANGE_CART_QTY",
          payload: {
            id: id,
            qty: e.target.innerText
          }
        })} className=' w-10 h-8 text-first'>{cart.some(c => c.id === id) ? (cart.map(c => c.id === id && c.qty)) : quantity}</p>

        <button onClick={() => handleQuantity(id, 1)} className=' bg-gray-200 active:bg-gray-300 rounded-r-md w-8 h-8 pb-[3px]'>+</button>

      </div>
    </div>
  )
}




//manage quantity with default style for every page
const ManageQuantity = ({ id }) => {
  const { cart, dispatch, quantity, handleQuantity } = useQuantity();

  return (

    <div className='flex font-bold text-center text-xl text-black rounded-md  w-[104px] my-4'>
      <button onClick={() => handleQuantity(id, -1)} className='text-xl bg-first active:bg-gray-300 rounded-md w-8 h-8 pb-[3px]'>-</button>

      <p onChange={(e) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: id,
          qty: e.target.innerText
        }
      })} className=' w-10 h-8 text-first'>{cart.some(c => c.id === id) ? (cart.map(c => c.id === id && c.qty)) : quantity}</p>

      <button onClick={() => handleQuantity(id, 1)} className=' bg-first active:bg-gray-300 rounded-md w-8 h-8 pb-[3px]'>+</button>

    </div>

  )
}

export default ManageQuantity