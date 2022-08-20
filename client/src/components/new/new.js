import React, { useEffect, useState } from "react";
import LazyLoadComp from "./lazyLoadComp/lazyLoadComp";
import { Suspense } from "react";

import "./new.css";

const ProductCard = React.lazy(() => import("./productCard/productCard"));

export default function Newsection() {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    const produ = fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(() => {
          return [...data];
        });
        return data;
      })
      .catch((err) => {
        throw err;
      });

    return produ;
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="new">
      <h1 className="shop-heading">Our Newest Products</h1>
      <div className="shop-wrapper">
        {products.map((product, i) => {
          return (
            <Suspense fallback={<LazyLoadComp />}>
              <ProductCard product={product} ind={i} />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
}
