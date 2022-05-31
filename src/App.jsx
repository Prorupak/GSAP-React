import React from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CircleAnimations from "./animations/CircleAnimations";

const Heading = styled.h4`
  opacity: 0;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/circle-animations" element={<CircleAnimations />} />
      </Routes>
    </>
  );
};

export default App;
