import React from "react";
import { useEffect } from "react";
import "./about.css";

export default function About() {
  ///Implementing smooth scroll after a threshold is passed and fade animation
  function smoothScrollToElement() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    function callback(entries, observer) {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          /*
          const offset =
            document.querySelector("#about").getBoundingClientRect().top +
            window.scrollY;
          window.scrollTo({
            top: offset,
            left: 0,
            behavior: "smooth",
          });
          */
          document.querySelector(".about-wrapper").style.transform =
            "translateY(0%)";
          document.querySelector(".about-wrapper").style.opacity = "100%";
          observer.unobserve(document.querySelector("#about"));
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector("#about"));
  }
  function scrollToNew() {
    document.querySelector("#new").scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    smoothScrollToElement();
  }, []);
  return (
    <section id="about">
      <div className="about-wrapper">
        <h1 className="about-heading">What We Offer</h1>
        <p className="about-paragraph">
          Each piece of furniture is made in North Carolina by skilled
          craftsmen, and our company offers a range of furniture styles. We
          offer a mix of classic, modern, and midcentury designs. We have stores
          all over the country. You are welcomed to come visit us or order from
          our shop down below.
        </p>
        <a className="btn-black" onClick={scrollToNew}>
          Shop Now
        </a>
      </div>
    </section>
  );
}
