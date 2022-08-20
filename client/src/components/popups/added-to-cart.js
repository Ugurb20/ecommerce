import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import { useEffect } from "react";
import "./cart-is-full.css";

export default function AddedToCartPopup() {
  const dispatch = useDispatch();
  const popupVisible = useSelector((state) => {
    return state.cart.addedToCart;
  });
  useEffect(() => {
    if (popupVisible) {
      setTimeout(() => {
        dispatch(CartActions.toggleAddedToCart());
      }, 2000);
    }
  }, [popupVisible]);
  return (
    <div
      className={`popup cart-added-popup ${
        popupVisible ? "popup-expand-add" : "popup-collapse"
      }`}
    >
      <div className="popupwrapper">
        <h1> Added to Cart!</h1>
      </div>
    </div>
  );
}
