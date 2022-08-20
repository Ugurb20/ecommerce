import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { CartActions } from "../../store/cart-slice";

import "./cart.css";

export default function Cart() {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const cartIsVisible = useSelector((state) => {
    return state.cart.cartIsVisible;
  });
  const cartTotal = useSelector((state) => {
    return state.cart.cartTotal;
  });
  const dispatch = useDispatch();
  function removeItem(e, key) {
    dispatch(CartActions.removeFromCart(key));
  }
  return (
    <div
      className={`checkout-wrapper ${cartIsVisible ? "expand" : "collapse"}`}
    >
      <div className="total-wrapper">
        {cart.map((product, i) => {
          return (
            <div className="cart-product" key={i}>
              <a onClick={(event) => removeItem(event, i)}>remove</a>
              <img className="product-img" src={product.link}></img>
              <div className="product-info">
                <h3>{product.productName}</h3>
                <h3>{product.price}</h3>
              </div>
            </div>
          );
        })}
        <div className="product-sign">
          <BiPlus size={"50px"} />
        </div>
        <h1 className="total-price">{`TOTAL: ${cartTotal.toFixed(2)}$`}</h1>
      </div>
      <div className="profile-wrapper">
        <h1>Your Profile:</h1>
        <h2> Username</h2>
        <h2> Left Credit: {}$</h2>
        <h2> Credit after purchase: {}$</h2>
        <a className="btn-black">Checkout</a>
      </div>
    </div>
  );
}
