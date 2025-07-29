import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
  const {cartItem,Product_list,removeFromCart}=useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
          <br />
          <hr />
          {Product_list.map((item,index)=>{
            if(cartItem[item._id]>0)
            {
              return(
                <div className='cart-item-title cart-item-title'>
                    <p>{item.name}</p>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Cart
