import {useState, useRef, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return(
    <>
  <NavBar title= {"Element"}/>
  <TextForm text= "Enter the details"/>
  </>
  )
}


export default App;
