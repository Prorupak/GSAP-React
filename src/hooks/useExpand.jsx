import { gsap, Power3 } from "gsap";
import React from "react";

const useExpand = (state) => {
  const [circles1, setCircles1] = React.useState(false);
  const [circles2, setCircles2] = React.useState(false);
  const [circles3, setCircles3] = React.useState(false);

  let circle1 = React.useRef(null);
  let circle2 = React.useRef(null);
  let circle3 = React.useRef(null);
  let container = React.useRef(null);

  const toggleAnimate = (circle, width, height) => {
    gsap.to(circle, {
      duration: 0.5,
      width: width,
      height: height,
      ease: Power3.easeOut,
    });
  };

  const toggle1 = () => {
    if (circle1.current !== null) {
      toggleAnimate(circle1.current, 100, 100);
      toggleAnimate(circle2.current, 50, 50);
      toggleAnimate(circle3.current, 50, 50);
      setCircles1(true);
      setCircles2(false);
      setCircles3(false);
    }
    if (circles1 === true) {
      setCircles1(false);
      toggleAnimate(circle1.current, 50, 50);
    }
  };
  const toggle2 = () => {
    if (circle2.current !== null) {
      toggleAnimate(circle2.current, 100, 100);
      toggleAnimate(circle1.current, 50, 50);
      toggleAnimate(circle3.current, 50, 50);
      setCircles2(true);
      setCircles1(false);
      setCircles3(false);
    }
    if (circles2 === true) {
      setCircles2(false);
      toggleAnimate(circle2.current, 50, 50);
    }
  };
  const toggle3 = () => {
    if (circle3.current !== null) {
      toggleAnimate(circle3.current, 100, 100);
      toggleAnimate(circle1.current, 50, 50);
      toggleAnimate(circle2.current, 50, 50);
      setCircles1(true);
      setCircles2(false);
      setCircles3(false);
    }
    if (circles3 === true) {
      setCircles3(false);
      toggleAnimate(circle3.current, 50, 50);
    }
  };

  const toggles = {
    toggle1,
    toggle2,
    toggle3,
  };

  const circles = {
    circles1: circle1.current,
    circles2: circle2.current,
    circles3: circle3.current,
  };

  const circleRefs = {
    circle1,
    circle2,
    circle3,
  };
  return {
    toggles,
    circles,
    circleRefs,
    container,
  };
};

export default useExpand;
