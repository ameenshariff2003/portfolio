import React, { useState } from 'react'
import "./sidebar.scss"
import Togglebtn from './togglebtns/Togglebtn'
import Links from './links/Links'
import { delay, motion } from 'framer-motion'

export default function Sidebar() {
    const [open,setOpen] = useState(false)


    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                
                type:"spring",
                Stiffness:20,
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                Stiffness : 400,
                damping : 40
            }
        }
    }
  return (
    <motion.div className='sidebar' animate={open? "open" : "closed"}>
    <motion.div className="bg" variants={variants}>
    <Links/>

    </motion.div>
    <Togglebtn  setOpen={setOpen}/>
      
    </motion.div>
  )
}
