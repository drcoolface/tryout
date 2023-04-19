import {useState, useRef, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return(
    <>
  <NavBar title= {"Element"}/>
  <TextForm text= "Enter the details"/>
  <About />
  </>
  )
}


export default App;
