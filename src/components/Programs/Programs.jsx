import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="Programs" id="programs">

        <div className="programs-header" id='programs'>
            <span className="stroke-text">Conheça nossos</span>
            <span>Programas</span>
            <span className="stroke-text">para seu shape</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>

                    <div className="join-now">
                        <span>Tenho interesse</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Programs
