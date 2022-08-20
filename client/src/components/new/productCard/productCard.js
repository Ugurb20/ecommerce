import ProductOverlay from "../productoverlay/productoverlay";
import { useState } from "react";

export default function ProductCard(props) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className="grid-item"
      onMouseOver={() => setOverlay(true)}
      onMouseOut={() => {
        setOverlay(false);
      }}
    >
      {overlay && <ProductOverlay ind={props.ind} product={props.product} />}
      <img src={props.product.link}></img>
      <p style={{ zIndex: "5000" }} className="product-name">
        {props.product.productName}
      </p>
    </div>
  );
}
