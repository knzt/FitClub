import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {

  const transition = {
    type: "spring",
    duration: 3,
  }

  const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">

        <Header/>

        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? '163px' : '228px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          >


          </motion.div>
          <span>O melhor club fitness da cidade</span>
        </div>

        <div className="hero-text">
            <div>
              <span className="stroke-text">Defina </span>
              <span>Seu</span>
            </div>
            <div>
              <span>Corpo ideal</span>
            </div>
            <div>
              <span>
              vamos te ajudar a definir e construir o seu corpo ideal, para aproveitar sua vida ao máximo
              </span>
            </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+"/>
            </span>
            <span>treinadores especialistas</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={500} delay={4} preFix="+"/></span>
            <span>membros registrados</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={10} delay={4} preFix="+"/></span>
            <span>programas fitness</span>
          </div>
        </div>

        <div className="hero-buttons">

          <buttons className="btn">
            faça parte
          </buttons>

          <buttons className="btn">
            Saiba mais
          </buttons>

        </div>

      </div>

      <div className="right-h">

        <button className="btn">Entrar</button>

        <motion.div
          initial={{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="uma figura de coração vermelha" />
          <span>ritmo cardíaco</span>
          <span>116 bpm</span>
        </motion.div>

{/* hero images */}
        <img className="hero-image" src={hero_image} alt="um homem em trajes esportivos amarrando o cadarço do tênis" />

        <motion.img
         initial={{right: "11rem"}}
         whileInView={{right: "20rem"}}
         transition={transition}
         className="hero-image-back" src={hero_image_back} alt="" />

        <motion.div
          initial={{right: "37rem"}}
          whileInView={{right: "28rem"}}
          transition={transition} className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>menos</span>
            <span>220kcal</span>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Hero
