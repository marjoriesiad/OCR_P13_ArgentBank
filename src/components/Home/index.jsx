import React from "react";
import "./home.css";
import Nav from "../Nav";
import Hero from "../Hero";
import Features from "../Features";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default Home;
