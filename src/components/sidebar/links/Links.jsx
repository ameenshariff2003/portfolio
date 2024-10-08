import { stagger , motion } from 'framer-motion'
import React from 'react'

const variants = {
    open : {
        transition:{
            staggerChildren : 0.1
        },
    },
    closed:{
        transition:{
        staggerChildren : 0.05,
        staggerDirection : -1
    }}
};

const itemVarient ={
    
        open : {
            y : 0,
            opacity : 1,
        },
        closed:{
            y : 50,
            opacity : 0,    
        }
    
}

export default function Links() {

    const item = [
        "Home", "Skills", "Latest Work", "contact"
    ]

    return (
        <motion.div className='links' variants={variants}>
            {item.map((el) => {
               return <motion.a href={`#${el}`} key={el} variants={itemVarient} whileHover={{scale:1.1}}  whileTap={{scale:0.95}}>{el}</motion.a>
            })}
        </motion.div>
    )
}
