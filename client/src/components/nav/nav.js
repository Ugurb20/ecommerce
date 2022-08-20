import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import { FaShoppingBag } from "react-icons/fa";
import { BiX } from "react-icons/bi";

import "./nav.css";

export default function Nav() {
  const [navstate, setNavState] = useState("");
  const dispatch = useDispatch();
  function handleCartVisibility() {
    dispatch(CartActions.toggle());
  }

  function handleScroll(e) {
    const dest = e.target.innerHTML.toLowerCase();
    document.querySelector(`#${dest}`).scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    function callback(entries, observer) {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          setNavState("");
        } else {
          if (navstate === "sticky") return;
          setNavState("sticky");
          return;
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector("#observer-line"));
  });
  const cartIsVisible = useSelector((state) => {
    return state.cart.cartIsVisible;
  });
  const orangeState = useSelector((state) => {
    return state.cart.changeCartColor;
  });
  return (
    <div
      className={`navbar ${navstate} ${cartIsVisible && "non-transparent "}`}
    >
      <div className="logo-wrapper">
        <h1 className="logo">LOGO</h1>
      </div>
      {!cartIsVisible && (
        <div className="nav-link-wrapper">
          <a onClick={handleScroll}>HOME</a>
          <a onClick={handleScroll}>ABOUT</a>
          <a onClick={handleScroll}>NEW</a>
        </div>
      )}

      <div className="shopping-bag-wrapper">
        <a
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleCartVisibility}
          className="shop-cart-icon"
        >
          {cartIsVisible ? (
            <BiX size={"60px"} fill={"#6f6765"} />
          ) : (
            <FaShoppingBag
              size={"35px"}
              className={`${orangeState ? "orange-cart" : ""}`}
            />
          )}
        </a>
      </div>
    </div>
  );
}
