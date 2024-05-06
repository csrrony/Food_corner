import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import useQuantity from '../hooks/useQuantity';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const { cart, dispatch, quantity, handleQuantity } = useQuantity();
  const [country, setCountry] = useState();
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("")
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState();
  const [shippingData, setShippingData] = useState({ country: '', state: '', zip: '' });

  const navigate = useNavigate();

  const PerProductTotal = (price, qty) => {
    return (Number(price) * qty);
  }

  useEffect(() => {
    setShippingData({ ...shippingData, country: selected })
  }, [selected])



  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [quantity, cart])


  useEffect(() => {
    const fetchCountries = async () => {
      const respons = await fetch("https://restcountries.com/v2/all?fields=name")
      const countries = await respons.json();
      setCountry(countries)
    }
    fetchCountries()
  }, [])

  const updatedNotify = () => {
    toast("Total Updated")
  }


  return (
    <div className='container flex flex-col gap-6'>
      <div>
        <table className=' w-full'>
          <thead className='px-2 py-3 text-left bg-second text-white font-bold'>
            <tr>
              <th className=' text-left pl-2 py-3'>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className=' pr-2'>Edit</th>
            </tr>
          </thead>
          <tbody className=' border-2 border-gray-200'>
            {
              cart.map(({ id, img, heading, price, qty }, i) => (
                <tr key={i} className=' text-sm font-bold text-left text-gray-600'>
                  <td>
                    <div className='flex gap-2 col-span-2 justify-self-start items-center'>
                      <Link to={`/shop/${id}`}>
                        <img src={img} alt="" className=' h-[50px] w-[50px] bg-cover rounded-sm' /></Link>
                      <Link to={`/shop/${id}`}>{heading}</Link>
                    </div>
                  </td>
                  <td className=' pr-2'>Tk.{price}</td>
                  <td>
                    <div className='flex font-bold text-center text-gray-600 ring-2 rounded-sm ring-gray-300 w-[73px] mt-6 mb-4'>
                      <button onClick={() => handleQuantity(id, -1)} className='text-xl active:bg-gray-300 rounded-l-sm w-5 h-8 pb-[3px]'>-</button>

                      <p onChange={(e) => dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: id,
                          qty: e.target.innerText
                        }
                      })} className=' w-8 h-8 text-first text-lg border border-gray-300'>{cart.some(c => c.id === id) ? (cart.map(c => c.id === id && c.qty)) : quantity}</p>

                      <button onClick={() => handleQuantity(id, 1)} className=' text-lg active:bg-gray-300 rounded-r-sm w-5 h-8 pb-[3px]'>+</button>

                    </div>
                  </td>
                  <td>
                    Tk. {PerProductTotal(price, qty)}
                  </td>
                  <td><MdDelete onClick={() => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id }
                  })} className=' cursor-pointer drop-shadow-xl hover:drop-shadow-none  text-red-600 text-2xl active:text-red-500' /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className={` text-center ${cart.length < 1 ? "block" : "hidden"}`}>
        <h1 className=' text-2xl font-bold text-second'>Cart is Empty</h1>
        <Link to={"/shop"} className=' font-bold text-primary'>Add Product</Link>
      </div>
      <div className={`text-left ${cart.length < 1 ? "hidden" : "block"}`}>
        <Link to={"/shop"} className=' font-bold text-primary'>Add More Product</Link>
      </div>
      <div className=' p-4 mb-10 rounded-md border-2 border-gray-200'>

        <div className='flex justify-between flex-col lg:flex-row text-sm font-bold gap-4 mb-7'>
          <div className='flex'>
            <input type="text" placeholder='Coupon Code...' className=' outline-none border border-gray-200 px-2 font-semibold tracking-wider' />
            <button className=' bg-second text-white rounded-sm py-2 px-4'>Apply Coupon</button>
          </div>
          <button disabled={cart.length < 1 ? true : false} onClick={() => navigate("/cart/payment")} className={`  ${cart.length < 1 ? "bg-blue-400" : "bg-primary hover:bg-blue-600"} tracking-wider text-white rounded-md py-2 w-[190px] text-center`} >Proceed to Checkout</button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>

          <div className='flex flex-col text-sm text-gray-400 gap-3 font-bold tracking-wider'>
            <h1 className=' text-gray-700 text-xl font-bold'>Calculate Shipping</h1>

            <div className='w-[368px] relative'>

              <div className=' relative w-full flex justify-between items-center bg-white' onClick={() => setOpen(!open)}>

                <input
                  type='text'
                  value={selected ? selected : "Search country..."}
                  className=' w-full h-full p-2 outline-none' />

                <div className=' absolute right-0 bg-second w-10 h-8 p-[6px] flex justify-center items-center'>
                  <HiChevronDown className={` text-xl text-white cursor-pointer transition duration-500 ${open && "-rotate-180"}`} />
                </div>

              </div>
              <ul className={` w-full ${open ? "max-h-[155px] block" : " hidden"} absolute top-[36px]  overflow-y-auto bg-white p-2 rounded`}>
                <div className='flex items-center px-2 sticky -top-2 bg-white'>
                  <IoIosSearch className=' text-gray-400 text-lg absolute left-4' />

                  <input value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                    type="text" className=' pl-8 py-2 border border-gray-200 w-full outline-none font-bold rounded' placeholder='Search...' />

                </div>
                {
                  country?.map(cnt => (
                    <li key={cnt?.name} className={
                      ` cursor-pointer p-2 text-sm hover:bg-second hover:text-gray-700 
                    
                      ${cnt?.name?.toLowerCase() === selected?.toLowerCase() && "bg-second text-gray-700"} 
                    
                      ${cnt?.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`
                    }
                      onClick={() => {
                        if (cnt?.name?.toLowerCase() !== selected.toLowerCase()) {
                          setSelected(cnt?.name)
                          setOpen(false)
                          setInputValue("")
                        }
                      }}>{cnt?.name}</li>
                  ))
                }


              </ul>
            </div>
            <div className='flex gap-4 w-full text-gray-400'>
              <input onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })} type="text" autoComplete='off' placeholder='State/Division' className=' outline-none py-2 px-2 border border-gray-200 rounded-sm bg-white' value={shippingData.state} />
              <input onChange={(e) => setShippingData({ ...shippingData, zip: e.target.value })} type="text" autoComplete='off' placeholder='Postcode/ZIP' className=' py-2 px-2 outline-none border border-gray-200 rounded-sm bg-white' value={shippingData.zip} />
            </div>
            <button type='submit' disabled={shippingData.country == '' || shippingData.state == '' || shippingData.zip == '' ? true : false} className={`${shippingData.country == '' || shippingData.state == '' || shippingData.zip == '' ? "bg-orange-300" : "bg-second"} w-[120px] py-2 text-sm text-white font-bold tracking-wide rounded-md`} onClick={updatedNotify}>Update Total</button>
            <ToastContainer />

          </div>

          <div className='flex flex-col gap-3 text-gray-400 text-sm font-bold tracking-wider'>
            <h1 className=' text-gray-700 text-xl font-bold'>Cart Totals</h1>
            <div className='flex justify-between items-center border border-gray-200 rounded-sm py-2 px-2'>
              <p>Cart Subtotal</p>
              <p className=' text-orange-700'>Tk.{subTotal}</p>
            </div>
            <div className='flex justify-between items-center border border-gray-200 rounded-sm py-2 px-2'>
              <p>Shipping and Handling</p>
              <p className=' text-orange-700'>Free Shipping</p>
            </div>
            <div className='flex justify-between items-center border border-gray-200 rounded-sm py-2 px-2'>
              <p>Order Total</p>
              <p className=' text-orange-700'>Tk.{Number(subTotal).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart