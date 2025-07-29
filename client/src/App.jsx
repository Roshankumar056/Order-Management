import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrdered from "./pages/PlaceOrdered/PlaceOrdered";
import Footer from "./components/Footer/Footer";
import LogInPopup from "./components/LogInPopup/LogInPopup";

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LogInPopup/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<PlaceOrdered />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
