import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeItem } from '../utils/cartSlice';


export const Cart = () => {
  const items = useSelector( (store) => store.cart.items )

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  }

  return (
    <div>{items.map(
      (item, index) => 
        <div className='row' key={index}>
          <li>{item.title}</li>
          <a onClick={ () => handleRemoveItem(index) } className="btn btn-danger">Remove Item</a>
        </div>
      )
    }
    <a onClick={ handleClearCart } className="btn btn-primary">Clear Cart</a>
    </div>
  )
}
