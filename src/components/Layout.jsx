import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Nav />
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

