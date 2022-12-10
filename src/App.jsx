import React from "react";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
    </div>
  );
}
