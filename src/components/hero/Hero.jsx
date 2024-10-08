import React from 'react'
import './hero.scss'
import { animate, stagger ,motion} from 'framer-motion'


const textVarient = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x : 0,
        opacity : 1,
        transition : {
            duration : 1,
            staggerChildren : 0.1
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat : Infinity
        }
    }
}
const sliderVarient = {
    initial:{
        x:0,
        
    },
    animate:{
        x : "-220%",
        transition : {
            
            repeat:Infinity,
            repeatType:"mirror",
            duration : 20,
        },
    },
   
}

export default function Hero() {
  return (
    <div className='hero'>
    <div className="wrapper">
    <motion.div className="textContainer" variants={textVarient} initial="initial" animate="animate">
        <motion.h2 variants={textVarient}>AMEEN SHARIFF</motion.h2>
        <motion.h1 variants={textVarient}>Fullstack Web Developer</motion.h1>
        <motion.div variants={textVarient} className="buttons">
           <a href='/ameenresume.pdf' download="ameen_resume.pdf"><motion.button  variants={textVarient}> Download my Resume</motion.button></a>
           <a href='#contact'><motion.button variants={textVarient}>Contact Me</motion.button></a>
            

        </motion.div>
        <motion.img src="/scroll.png" animate="scrollButton" variants={textVarient} alt="" />
    </motion.div> </div>
    <motion.div className="slidingContainer" variants={sliderVarient} initial="initial" animate="animate">
        MERN Stack Developer 
    </motion.div>
    <div className="imgContainer">
        <img src="/ameenpassport.jpg" alt="" />
    </div>
      
    </div>
  )
}
