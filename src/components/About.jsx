import React from 'react'
import  {Tilt}  from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {services} from "../constants"
import { textVariant, fadeIn } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options= {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    Hi, I'm Ashish Kumar Singh — a passionate Full Stack Developer and MCA student with a strong interest in building scalable web applications and cloud-based solutions. I enjoy turning complex problems into simple, beautiful, and intuitive user experiences.
    I have hands-on experience with modern web technologies like React, JavaScript, PHP, Laravel, and REST APIs, along with practical knowledge of Git, Docker, and Linux environments. I’m also an AWS Certified Cloud Practitioner, which helps me design and deploy applications with a cloud-first approach.
    I love learning new technologies, solving real-world problems through code, and continuously improving my development and system design skills. Currently, I’m focused on creating performant, responsive, and user-friendly applications while expanding my expertise in cloud and full-stack development.
    My goal is to contribute to impactful projects, grow as a software engineer, and build solutions that make a meaningful difference. Let's collaborate on exciting projects. Thank you for visiting! 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=> (
        <ServiceCard key={service.title} index ={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")