import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
// import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <main className='container'>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

