import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Expereince from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expereince />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
}
