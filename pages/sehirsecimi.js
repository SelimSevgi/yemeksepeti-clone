import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import PageEnd from "./components/PageEnd";
import MobileMenu from "./components/MobileMenu";
import CityHome from "./components/CityHome";

export default function sehirsecimi() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
      <PageEnd />
      <MobileMenu />
      <CityHome />
    </div>
  );
}
