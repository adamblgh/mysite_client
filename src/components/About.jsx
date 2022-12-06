import React from 'react'
import { motion } from "framer-motion"

export const About=()=> {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:1.5}} className="border border-danger p-3">
      <h1 className='mt-2 text-center'>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores quia pariatur, natus inventore earum est accusamus iusto recusandae maiores, sit fugiat unde dolorum quibusdam quas, suscipit ab perferendis cupiditate?</p>
    </motion.div>
    
  )
}
