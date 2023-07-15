import React from 'react';
import styled, { keyframes } from 'styled-components';  
import SeedI from './3D/SeedI';
import Sapling1 from './3D/SaplingI';
import { Canvas } from '@react-three/fiber';
import Tree1I from './3D/Tree1I';
import ManureI from './3D/ManureI';
import Tree2I from './3D/Tree2I';
import { WrapAroundEnding } from 'three';
import { motion,useTransform,useScroll  } from 'framer-motion';

const Section = styled.div`
height: 150vh;
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display : flex;
margin-top :1% ;
justify-content: space-between; 
flex-direction: row;
gap: 8px;
`

const Left = styled(motion.div)`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: aliceblue; */
`

const Left1 = styled.div`
height: 20vh;
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* background-color: #bdef26; */
width: 100%;
`

const Left2 = styled.div`
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* background-color: #bdef26; */
width: 100%;
height: 100vh;
`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
/* background-color: aqua; */
`


const Right1 = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column ;
justify-content: center;
/* background-color: #bdef26; */
`

const Right2 = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
/* background-color: #ee2424; */
width: 100%;
`

const Title = styled(motion.h2)`
font-family: "Plaster", sans-serif;
font-size: 52px;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: #bdef26; */
width: 100%;
height: 100%;
transform: rotate(180deg);
writing-mode: vertical-lr;
color: transparent;
-webkit-text-stroke: 2px #ffffff;
letter-spacing: 2px;
`
const Items = styled.div`
flex: 4;
display: flex;
align-items: center;
flex-direction: row;
/* justify-content: center; */
/* background-color: #922d2d; */
height: 100%;
`

const Image = styled(motion.img)`
max-width: 10%;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(5px);
    }}


`;
const Text = styled(motion.div)`
padding-left: 64px;
font-size: 24px;
font-weight: 600;
color: #DEF7E3
;
`;    
const Text2 = styled(motion.div)`
font-size: 16px;
font-weight: 400;

`;    

const Wrapper = styled(motion.div)`
flex: 4;
display: flex;
flex-direction: column;
gap: 80px;
justify-content: space-between;
`;  
const Button = styled(motion.button)`
margin-top: 32px;
background-color: #3D4917;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    
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



const Collect = () => {
    const { scrollY } = useScroll();
    const translateY = useTransform(scrollY, [0, 1], [0, -100]); 

    return (
         <Section>
            <Container>
                <Left >
                <Left1>
                <Title initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Stages</Title>
                <Wrapper>
                <Items >
                <Image src='/seeds.svg' initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
              }} /> 
                    <Text initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Seed 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Day 0 - 4</Text2>
                        </Text>                 
                </Items>
                <Items >
                <Image src='/seedling.svg' initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
              }}  /> 
                    <Text initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Seedling 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Day 5 - 20</Text2>
                        </Text>                 
                 
                    </Items>
                <Items >
                <Image src='/tree.svg' initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  /> 
                    <Text initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Tree 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Day 30-35</Text2>
                        
                        </Text>                 
                       
                    </Items>
                </Wrapper>
                </Left1>

                <Left2>
                <Title initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Tools</Title>
                <Wrapper>
                <Items >
                <Image src='/droplet.svg' initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  /> 
                    <Text initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Water 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >It's Needed Everyday</Text2>
                        </Text>                 
                </Items>
                
                <Items >
                <Image src='/manure.svg' initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  /> 
                    <Text initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Manure 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Speed Up by 2 Days!</Text2>
                        </Text>                 
                
                    </Items>
                </Wrapper>

                </Left2>
                </Left>


                <Right>
                <Left2>
                
                <Items style={{flexDirection:'column'}}  >
               <Tree1I />
                    <Text style={{paddingLeft:'16px'}} initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Tree NFT 
                        <Text2 initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
              }} >The virtual twin of a real world sapling planted by your efforts and contributions. This sapling would be geotagged and its updates would be stored on hashgraph, a distributed ledger to ensure transparency and authenticity, and will keep it monitorable and tamper-proof. </Text2>
                        </Text>
                        <Button initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  >Mint</Button>                 
                </Items>               
                <Title initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }} >Collectibles</Title>

                </Left2>
                   
                </Right> 
               </Container>
         </Section>
    );
};

export default Collect;