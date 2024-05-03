import { useState } from 'react'
import { CartState } from '../context/Context';

const useQuantity = () => {
  const { state: { cart }, dispatch } = CartState();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (id, d) => {
    cart.map(c => {
      if (c.id === id) {
        c.qty = Number(c.qty) + d;
        c.qty < 1 && (c.qty = 1);
        c.qty > 10 && (c.qty = 10);
        setQuantity(c.qty)
      }
    })
  }

  return ({ cart, dispatch, quantity, handleQuantity })
}

export default useQuantity