import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
import 'boxicons/css/boxicons.min.css'

import React,{useState,useRef} from 'react'
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const resumeRef = useRef()
  const serviceRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()

  const sections =[
    {
      name:'header',
      ref:homeRef,
      active:true
    },
    {
      name:'about',
      ref:aboutRef,
      active:false
    },
    {
      name:'resume',
      ref:resumeRef,
      active:false
    },
    {
      name:'services',
      ref:serviceRef,
      active:false
    },
    {
      name:'portfolio',
      ref:portfolioRef,
      active:false
    },
    {
      name:'contact',
      ref:contactRef,
      active:false
    },
  ]


  return (
    <>
    <Header ref={homeRef}/>
    <About ref={aboutRef}/>
    <Resume  ref={resumeRef}/>
    <Services ref={serviceRef}/>
    <Portfolio ref={portfolioRef}/>
    <Contact ref={contactRef}/>
    </>
  );
}

export default App;
