import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, Product_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate()
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Product_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
  <div className="cart-bottom-wrapper">
    <div className="cart-total">
      <h2>Cart Total</h2>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>${getTotalCartAmount()===0?0:2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total</b>
        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
      </div>
      <button onClick={()=>navigate("/order")} >PROCEED TO CHECKOUT</button>
    </div>

    <div className="cart-promocode">
      <div>
        <p>If you have promocode, Enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="promocode" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Cart;
