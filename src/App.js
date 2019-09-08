import React from "react";
import ResponsiveDrawer from "./Component/AppBar/AppBar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import { Router } from "@reach/router";

export default function App() {
  return (
    <div>
      <ResponsiveDrawer />
      <Router>
        <About path="about" />
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}
