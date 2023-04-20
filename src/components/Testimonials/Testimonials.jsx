import React from 'react'
import './Testimonials.css'
import { testimonialsData } from './../../data/testimonialsData';
import { useState } from 'react';
import {motion} from 'framer-motion'

import rightArrow from './../../assets/rightArrow.png';
import leftArrow from './../../assets/leftArrow.png';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);

    const tLenght = testimonialsData.length;

    const transition = {
        type: "spring",
        duration: 3,

      }


  return (
    <div className="Testimonials" id='testimonials'>
        <div className="left-t">
            <span>Depoimentos</span>
            <span className='stroke-text'>O que</span>
            <span>dizem sobre nós</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>

            <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}

            - {testimonialsData[selected].status}

        </div>

        <div className="right-t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
            ></motion.div>

            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
            ></motion.div>

            <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img
                onClick={() => {
                    selected === 0 ? setSelected(tLenght - 1) : setSelected((prev) => prev - 1);
                }}
                src={leftArrow} alt="" />
                <img
                onClick={() => {
                    selected === tLenght - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
