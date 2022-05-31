import React from "react";
import { gsap, Power3 } from "gsap";
import styled from "styled-components";

//make three circles
const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  border-radius: 50%;
`;
const Circle2 = styled(Circle)`
  background-color: var(--secondary);
`;
const Circle3 = styled(Circle)`
  background-color: var(--red);
`;

const Container = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const CircleAnimations = () => {
  const [circles1, setCircles1] = React.useState(false);
  const [circles2, setCircles2] = React.useState(false);
  const [circles3, setCircles3] = React.useState(false);

  let circle1 = React.useRef(null);
  let circle2 = React.useRef(null);
  let circle3 = React.useRef(null);
  let container = React.useRef(null);

  const toggleCircles = (circle, width, height) => {
    gsap.to(circle, {
      duration: 0.5,
      width: width || 50,
      height: height || 50,
      ease: Power3.easeOut,
    });
  };

  const toggle1 = () => {
    if (circle1.current !== null) {
      toggleCircles(circle1.current, 100, 100);
      toggleCircles(circle2.current, 50, 50);
      toggleCircles(circle3.current, 50, 50);
      setCircles1(true);
      setCircles2(false);
      setCircles3(false);
    }
    if (circles1 === true) {
      toggleCircles(circle1.current, 50, 50);
      toggleCircles(circle2.current, 50, 50);
      toggleCircles(circle3.current, 50, 50);
      setCircles1(false);
    }
  };
  const toggle2 = () => {
    if (circle2.current !== null) {
      toggleCircles(circle2.current, 100, 100);
      toggleCircles(circle1.current, 50, 50);
      toggleCircles(circle3.current, 50, 50);
      setCircles2(true);
      setCircles1(false);
      setCircles3(false);
    }
    if (circles2 === true) {
      toggleCircles(circle1.current, 50, 50);
      toggleCircles(circle2.current, 50, 50);
      toggleCircles(circle3.current, 50, 50);
      setCircles2(false);
    }
  };
  const toggle3 = () => {
    if (circle3.current !== null) {
      toggleCircles(circle3.current, 100, 100);
      toggleCircles(circle1.current, 50, 50);
      toggleCircles(circle2.current, 50, 50);
      setCircles3(true);
      setCircles2(false);
      setCircles1(false);
    }
    if (circles3 === true) {
      toggleCircles(circle1.current, 50, 50);
      toggleCircles(circle2.current, 50, 50);
      toggleCircles(circle3.current, 50, 50);
      setCircles3(false);
    }
  };

  React.useEffect(() => {
    gsap.to(container.current, {
      duration: 0,
      visibility: "visible",
    });
    gsap.from(circle1.current, {
      duration: 0.8,
      opacity: 1,
      x: 40,
      immediateRender: false,
      ease: Power3.easeOut,
    });
    gsap.from(circle2.current, {
      duration: 0.8,
      delay: 0.2,
      opacity: 0,
      x: 40,
      immediateRender: false,
      ease: Power3.easeOut,
    });
    gsap.from(circle3.current, {
      duration: 0.8,
      delay: 0.4,
      opacity: 0,
      x: 40,
      immediateRender: false,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <Container ref={container}>
      <Circle ref={circle1} onClick={toggle1} />
      <Circle2 ref={circle2} onClick={toggle2} />
      <Circle3 ref={circle3} onClick={toggle3} />
    </Container>
  );
};

export default CircleAnimations;
