import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
    <img src={cart} alt='cart' className="CartIcon" style={{width:35}}/>
    <span className="cart-count">3</span>
    </>
    
  )
}

export default CartWidget;