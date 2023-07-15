import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {motion, useScroll, useTransform} from "framer-motion";


const Section = styled.div`
height: 100vh;
overflow-y: auto;
overflow-x: hidden;
perspective: 10px;

    

/* background-color: coral; */
`
const Container = styled(motion.div)`
position: relative;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
transform-style: preserve-3d; 
z-index: -1;
/* background-color: blue; */
/* background-size: cover; */

`;
const Container1 = styled(motion.div)`
height: 100vh;
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: #c5c945e9;
background-image: url('./images/Layer1.png');
background-size: cover;


`;


const Container2 = styled.div`
height: 100vh;
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #ff0000; */
/* background-image: url('./images/Layer5.png'); */
background-size: cover;


`;


const Container3 = styled.div`
height: 100vh;
width: 900px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: blue; */
/* background-image: url('./images/Layer6.png'); */
background-size: cover;

`;



const Text = styled(motion.h1)`
font-size: 100px;


/* background-color: #0e1d05; */
`;
 const Image1 = styled.img`
 position: absolute;
 height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateZ(-15px) scale(2.5);
 `;

const Image2 = styled.img`
 position: absolute;
 bottom: 100%;
 height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: -2;
  transform: translateZ(-25px) scale(3.5);
 `;

const Image3 = styled.img`
 position: absolute;
 padding-bottom: 30%;
 height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: -3;
  transform: translateZ(-10px) scale(2);
 `;




const Hero = () => {

    return (
       <Section >
              <Container>
                 <Image1 src="/images/Layer1.png" alt="Layer1" />
                 <Text >Virtual Forest</Text>
                 <Image2 src="/images/Layer3.png" alt="Layer3" />
                
               
              </Container>
       </Section>
    );
};

export default Hero;