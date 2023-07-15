import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color:#cbe894 ;
`;

const Container = styled.div`
  height: 10vh;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

const underlineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const Items = styled.div`
  height: 10vh;
  width: 120px;
  color: #3D4917;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
  position: relative;
  /* Add the animation */
  &:after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 0;
    width: 100%;
    height: 2.5px;
    border-radius: 64px;
    background-color: transparent;
    transform-origin: left;
    transition: background-color 0.3s;
  }
  &:hover::after {
    background-color: #00A642; /* Change the color to your desired underline color */
    animation: ${underlineAnimation} 0.3s forwards;
    
  }
`;

const Button = styled.button`
background-color: #3D4917;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    padding-left: 80px;
    display: flex;
    font-family: 'calibri', 'sans-serif';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 0.7rem 1.2rem 0.6rem 1.2rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    letter-spacing: 0.2rem;
    

    &:hover {
    background-color: #00A642;
    color: #fff;
    scale: 1.1;
    /* animation: hoverAnimation 0.5s ease-in-out; */
  }
`;   

const NavBar = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access from MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // You can now interact with the connected wallet using ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // Example: Get the connected wallet address
        const address = await signer.getAddress();
        console.log('Connected wallet address:', address);
        // Add your custom logic here to interact with the connected wallet
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask extension not detected');
    }
  };

  
    return (
        <Section>
      <Container>
        <Items>Home</Items>
        <Items>About</Items>
        <Items>Model</Items>
        <Items>FAQs</Items>
        <Button onClick={connectWallet}>Connect Wallet</Button>
      </Container>
    </Section>
    );
};

export default NavBar;