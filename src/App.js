import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
// import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <main className='container'>
      <TopNav />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

