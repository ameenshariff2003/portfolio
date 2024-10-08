import { useRef } from "react"
import "./skills.scss"
import { motion, stagger , useInView } from "framer-motion"

const varients = {
  initial:{
    x:-500,
    
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    
    transition:{
      duration:2,
      staggerChildren:0.1,
    }
  }
}
export default function Skills() {

  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"});
  return (
    <motion.div className="skillsComponent" variants={varients} 
    ref={ref} 
    // initial="initial" animate={isInView && "animate"}
    animate="animate"
    >
      <motion.div className="textContainer" variants={varients} >
        <p >Any fool can write code that a computer can understand. <br />
          Good programmers write code that <br />humans can understand.</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varients} >
        <div className="title">
          <img src="/mern.avif" alt="" />
          <h1><motion.b whileHover={{color:"#4747f0"}}>Trust</motion.b>  me,</h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#4747f0"}}>
              I’m a
            </motion.b> developer!

          </h1>
         <a href="#project"> <button>PROJECTS</button></a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={varients} >
        <div className="box box-1">
          <h1>FRONTEND</h1><hr />
          <div className="logoFE">
            <img src="/htmlLogo.png" alt="" />
            <img src="/css.png" alt="" />
            <img src="/js.png" alt="" />
            <img src="/react.png" alt="" />
          </div>
        </div>
        <div className="box box-2">
          <h1>BACKEND</h1>
          <hr />
          <div className="logoBE">
            <img src="/nodejs.png" alt="" />
            <img src="/express.png"   alt="express" />
           
          </div>
        </div>
        <div className="box box-3">
          <h1>DATABASE</h1><hr />
          <div className="logoDB">
            <img src="/mongoDb.png" style={{width:"100px"}} alt="" />
            <img src="/sql.png" alt="" />
          </div>
        </div>
        <div className="box box-4">
          <h1>OTHERS</h1>
          <hr />
          <div className="logoOT">
            <img src="/git.png"  alt="" />
            <img src="/github.png" style={{height:"60px"}}alt="" />
          </div>
        </div>
      </motion.div>


    </motion.div>
  )
}
