import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Career from "../Pages/Career/Career";
import Menubar from "../Component/menubar/menubar";
import Player from "../../../checkpoint/playerList";

function AppRoute() {
  return (
    <BrowserRouter>
      <Menubar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/jobs" element={<Career />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoute;
