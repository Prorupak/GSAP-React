import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CircleAnimations from "./animations/CircleAnimations";


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
