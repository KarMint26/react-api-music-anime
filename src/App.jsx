import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ListMusic from "./pages/ListMusic";
import Footer from "./components/Footer";
import ButtonBackTop from "./components/ButtonBackTop";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    window.onscroll = () => {
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        if (mybutton) {
          mybutton.style.display = "flex";
        }
      } else {
        if (mybutton) {
          mybutton.style.display = "none";
        }
      }
    };
  }, []);
  return (
    <div>
      <ButtonBackTop />
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list-music" element={<ListMusic />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
