import React from 'react'
//import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon})=>{
  return(<p>
    <Tilt className='xs:w-[250px] w-full' >
        <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          
        <div 
        options = {{
          max:45,
          scale:2,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
      flex justify-evenly items-center flex-col'
      >
        <img src ={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'> {title} </h3>

      </div>

        </motion.div>

    </Tilt>
  </p>)
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1,1)} 
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
          I'm current a  project manager that focus's on team deliverables, scheduling, and budgeting. 
          As a Certified Scrum Master, I oversee complex projects both with in my company and with 
          external vendors & manufacturers.I am well-versed in looking at complicated project problems 
          from various angles, leading indviduals towards a unifed goal in an agile envrionment, and 
          communicating complex techincal issues to the wider team. 

        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) =>(
            <ServiceCard key={service.title} index={index} {...service} />
          ))}

        </div>

    </>
  )
}

export default SectionWrapper (About, "about");