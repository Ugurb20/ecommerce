import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Newsection from "./components/new/new";
import Footer from "./components/footer/footer";
import Cart from "./components/cart/cart";
import AddedToCartPopup from "./components/popups/added-to-cart";
import { useSelector } from "react-redux";
import CartFullPopUp from "./components/popups/cart-is-full";

import "./App.css";

function App() {
  const cartIsVisible = useSelector((state) => {
    return state.cart.cartIsVisible;
  });
  return (
    <div className={`App ${cartIsVisible ? "fix-height" : null}`}>
      <Hero />
      <About />
      <Newsection />
      <Footer />
      <Cart />
      <CartFullPopUp />
      <AddedToCartPopup />
    </div>
  );
}

export default App;
