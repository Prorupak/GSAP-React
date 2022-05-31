/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { gsap, Power3 } from "gsap";
import styled from "styled-components";
import useExpand from "../hooks/useExpand";

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
  let { toggles, circleRefs, circles, container } = useExpand();

  React.useEffect(() => {
    gsap.to(container.current, {
      duration: 0,
      visibility: "visible",
    });
    gsap.from(circleRefs.circle1.current, {
      duration: 0.8,
      opacity: 1,
      x: 40,

      ease: Power3.easeOut,
    });
    gsap.from(circleRefs.circle2.current, {
      duration: 0.8,
      delay: 0.2,
      opacity: 0,
      x: 40,

      ease: Power3.easeOut,
    });
    gsap.from(circleRefs.circle3.current, {
      duration: 0.8,
      delay: 0.4,
      opacity: 0,
      x: 40,

      ease: Power3.easeOut,
    });
  }, [container]);

  return (
    <Container ref={container}>
      <Circle ref={circleRefs.circle1} onClick={toggles.toggle1} />
      <Circle2 ref={circleRefs.circle2} onClick={toggles.toggle2} />
      <Circle3 ref={circleRefs.circle3} onClick={toggles.toggle3} />
    </Container>
  );
};

export default CircleAnimations;
