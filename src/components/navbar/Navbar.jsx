import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

export default function Navbar() {
  return (
    <div className="navbar">
    {/* {slider} */}
    <Sidebar/>
    <div className="wrapper">

        <motion.span 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >Ameen shariff</motion.span>
        <motion.div className="socials" 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}>
        <a href="https://www.instagram.com/ameennshariff?igsh=MWVoZWdsOGRjOTg3dQ%3D%3D&utm_source=qr "><img src="/instagram.png" alt="" /></a>
        <a href="https://github.com/ameenshariff2003"><img src="/github.png" alt="" /></a>

        <a href="https://www.linkedin.com/in/ameenshariff/"><img src="/linkedin.png" alt="" /></a>
        <a href="https://www.youtube.com/@AmeenShariff-x3c"><img src="/youtube.png" alt="" /></a>

        </motion.div>
    </div>
      
    </div>
  )
}
