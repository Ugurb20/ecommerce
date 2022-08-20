import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CartActions } from "../../store/cart-slice";

import "./cart-is-full.css";

export default function CartFullPopUp() {
  const CartIsFull = useSelector((state) => {
    return state.cart.cartIsFull;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (CartIsFull) {
      setTimeout(() => {
        dispatch(CartActions.clearCartState());
      }, 2000);
    }
  }, [CartIsFull]);
  return (
    <div
      className={`popup cart-full-popup ${
        CartIsFull ? "popup-expand" : "popup-collapse"
      }`}
    >
      <div className="popupwrapper">
        <h1> You cannot add more than 10 items to Cart!</h1>
      </div>
    </div>
  );
}
