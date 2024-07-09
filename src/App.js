import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/about";
import Pricepool from "./components/pricepool/pricepool";
import Insights from "./components/FAQ/Insights";
import Footer from "./components/footer/footer";
import GetStarted from "./components/Timeline/Timeline";
import Context from "./components/context/context";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Context />
      <About />
      <h1 className="title">NO RAGE QUIT</h1>
      <Pricepool />
      <GetStarted />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
