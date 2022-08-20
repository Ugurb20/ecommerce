import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../../store/cart-slice";

import "./productoverlay.css";

export default function ProductOverlay(props) {
  const [bottomAnimation, setBottomAnimation] = useState("");
  const dispatch = useDispatch();
  function cartIconAnimate() {
    document
      .querySelector(".shop-cart-icon")
      .classList.add("shop-cart-icon-up");
    setTimeout(() => {
      document
        .querySelector(".shop-cart-icon")
        .classList.add("shop-cart-icon-down");
    }, 100);
    setTimeout(() => {
      document
        .querySelector(".shop-cart-icon")
        .classList.remove("shop-cart-icon-down");
      document
        .querySelector(".shop-cart-icon")
        .classList.remove("shop-cart-icon-up");
    }, 200);
  }
  useEffect(() => {
    setTimeout(() => {
      setBottomAnimation("overlay-wrapper-active");
    }, 50);
  }, []);
  function dispatchProduct() {
    dispatch(CartActions.addToCart(props.product));
    dispatch(CartActions.toggleAddedToCart());
    cartIconAnimate();
    setTimeout(() => {
      cartIconAnimate();
    }, 300);
  }
  return (
    <div
      className={`overlay-wrapper overlay-wrapper${props.ind} ${bottomAnimation} `}
    >
      <div className="animation-wrapper hidden">
        <h1 className="white-heading price">55$</h1>
        <a onClick={dispatchProduct} className="btn-black">
          Add to cart
        </a>
      </div>
    </div>
  );
}
