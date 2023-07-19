import React, {useState} from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import axios from 'axios'


import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import resume from '../assets/resume/Alaa_Agag_Resume_IV.pdf'


const ExperienceCard = ({experience}) =>{
  return <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{borderRight:'7px sold #232631'}}
    date = {experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt= {experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'> {experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style = {{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2' >
      {experience.points.map((point,index) => (
        <li key={`experience-point-${index}`}
          className='text-white-100 text-[14px] p1-1 tracking-wider'
        >
          {point}
        </li>


      ))}

    </ul>

  </VerticalTimelineElement>

  
}

const Experience = () => {

  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const resumePDF_URL = 'http://127.0.0.1:5173/src/assets/resume/Alaa_Agag_Resume_IV.pdf'

  const downloadPDF = (url) =>{
    setLoader(true)
    setError('')

    fetch(url).then(response => response.blob()).then(blob =>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = 'Alaa_Agag_Resume_IV.pdf'
      const aTag = document.createElement('a')
      aTag.href = blobURL
      aTag.setAttribute('download', fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    })
    
    setLoader(false)
  }

  return (
    

    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>

      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
            
      <motion.div variants= {textVariant()}
      className='mt-16 flex justify-center items-center'>
        <button 
        onClick={()=>{downloadPDF(resumePDF_URL)}} 
        className='rounded-full bg-white text-tertiary  '>
          <div className='m-3.5'>
            Download Resume
          </div>
        </button>
        {error !=='' && (<div> {error}</div>)}
      </motion.div>
      
    


    
    </>
  )
}

export default SectionWrapper(Experience, "work")