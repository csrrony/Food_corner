import React, { useContext, useReducer, createContext } from 'react'
import { Reducer } from './Reducer';
import { data } from '../data/Data';

//created context
const cartContext = createContext();

//valu provider function using context provider. So we can use Context anywhere as a wraper.
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { data: data, cart: [], shipping: [] });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export default Context;

//input useContext hook inside the CartState function. it defined for avoiding again and again import usecontext hook
export const CartState = () => {
  return useContext(cartContext);
}
