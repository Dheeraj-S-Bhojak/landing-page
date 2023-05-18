import React from "react";
import "./App.css";
import NavigationBar from "./components/navigation.component";
import Hero from "./components/hero.component";
import Footer from "./components/footer.component";
import Stats from "./components/stats.component";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
