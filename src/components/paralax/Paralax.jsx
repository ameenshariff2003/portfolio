import { useRef } from "react"
import "./paralax.scss"
import { motion,useScroll,useTransform } from "framer-motion"
export default function Paralax({type}) {

    const ref = useRef()


const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"]
})

const yText = useTransform(scrollYProgress,[0,1],["0%","100%"]);
const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
const yPlanet = useTransform(scrollYProgress,[0,1],["0%","100%"]);



  return (
    <div className="paralax"
    ref={ref}
      style={{background : type==="services"
    ?"linear-gradient(180deg,#111132,#0c0c1d)"
    :"linear-gradient(180deg,#111132,#505064)"
    }}>
    <motion.h1 style={{y:yText}}>{type==="services" ? "My Skills":"My Latest Work"}</motion.h1>
    <motion.div className="mountain"></motion.div>
    <motion.div  style={{y:yBg,
        backgroundImage:`url(${type==="sevices" ? "/planets.png" : "/sun.png"})`,}}
         className="planets"></motion.div>
    <motion.div style={{x:yPlanet}} className="stars"></motion.div>
      
    </div>
  )
}
