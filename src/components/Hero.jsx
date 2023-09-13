import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import anime from 'animejs';

import {styles} from '../styles'
import { ComputersCanvas } from './canvas';
import video from '../assets/video.mp4'


const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef()
  return (
    // <div className='flex items-end justify-center w-full h-screen text-center'>
    <section className='relative w-full h-screen mx-auto'>
       <DotGrid /> 
      {/* { <video ref={videoRef} src ={video} autoPlay loop muted className='object-cover h-full w-full absolute -z-10'/> } */}
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 pointer-events-none `}>
  
        {/* timeline */ }
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div> 
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'> Alaa </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an aspiring software developer <br className='sm:block hidden' />who specializes in web development
          </p>
         
         
        </div>
      </div>

      
      {/* <ComputersCanvas /> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div 
            animate ={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />

          </div>
        
        </a>
      </div>
      
    </section>
      
    //</div>
    // <section className='relative w-full h-screen mx-auto'>Hero</section>
  )
}


const GRID_WIDTH = 80
const GRID_HEIGHT = 32

const DotGrid = () => {

  const handleDotClick = (e) =>{
    anime({
      targets:".dot-point",
      scale: [
        { value:1.35, easing:'easeOutSine', duration:250},
        {value:1,  easing:'easeInOutQuad', duration:500}
      ],
      translateY:[
        {value:-15, easing:'easeOutSine', duration:250},
        {value:0,  easing:'easeInOutQuad', duration:500}
      ], 
      opacity:[
        {value:1, easing:'easeOutSine', duration:250},
        {value:0.5,  easing:'easeInOutQuad', duration:500}
      ],
      delay:anime.stagger(100,{
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index
      })

    })

  }

  const dots = []
  let index = 0

  for(let i = 0; i <GRID_WIDTH; i++){
    for(let j=0; j <GRID_HEIGHT; j++){
      dots.push(
        <div 
        onClick={handleDotClick}
        className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600'
        data-index={index}
        key={`${i}- ${j}`}
        >
          <div 
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />


        </div>
      )
      index++
    }
  }


  return (

    <div
      style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
      className='grid w-fit'
    >
      {dots.map((dot)=>dot)}
    </div>
  )
}

export default Hero