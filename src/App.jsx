import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import styled from 'styled-components';
import Collect from './components/Collect'


const Container = styled.div`
height: 100vh;
width: 100vw;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
color: white; 
background-image: url('/background.jpg');
scrollbar-width: 0;
&::-webkit-scrollbar {
  display: none;}
`;

function App() {

  return (
    <Container>
   <NavBar/>
   <Hero/>
   <Collect/>   
    </Container>
  )
}

export default App
