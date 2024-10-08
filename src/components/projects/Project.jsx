import { useRef } from "react"
import "./project.scss"
import { motion,useScroll ,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id: 1,
        title: "CAREO",
        img: "https://i.pinimg.com/originals/70/22/fd/7022fde301338644bca180ebce7d51a7.jpg",
        description: "Careo is a full-stack web application designed for users to easily buy and sell second-hand cars. Built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and EJS, the app offers features like user authentication,Authorization, car listings, and reviews. With a responsive design and intuitive interface, Careo ensures a smooth, user-friendly experience across all devices.",
        link:"https://careo-webapp.onrender.com/listings",
    },
    {
        id: 2,
        title: "WONDERLUST",
        img: "https://i.pinimg.com/564x/27/5f/cb/275fcb933434a4d8cdb8b0280241a65b.jpg",
        description: "Wonderlust is a full-stack web application where users can explore, post, and review holiday destinations. Using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and EJS, the app allows users to log in, share their travel experiences, and leave reviews on destinations. With a focus on user interaction and responsive design, Wonderlust provides a seamless platform for travelers to discover and recommend places.",
        link:"https://wonderlust-project-rjc5.onrender.com/listings",
    }
]


const Single = ({item})  =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref ,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-200,200])

    return (
        <section >
            <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt={item.title} />
                </div>
                <motion.div className="textpContainer" style={{y}}>
                    <a href={item.link} target="_blank"><h2 >{item.title}</h2></a>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank"><button>Link</button></a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
export default function Project() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref,offset:["end end" , "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:38
    })
    return (
        <div className="project" ref={ref}>
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
        ))}
          
        </div>
    )
}
