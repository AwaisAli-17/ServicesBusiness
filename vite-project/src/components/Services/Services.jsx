import React from 'react'
import './Services.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={program_1} />
        <div className='caption'>
            <p className='captionHeading'>Assignemnt Help</p>
            <p>Get expert support and accurate solutions tailored to your course requirements.</p>
        </div>
      </div>
       <div className='service'>
        <img src={program_2} />
        <div className='caption'>
            <p className='captionHeading'>Project Assistance</p>
            <p>Complete help with academic or technical projects from planning to final submission.</p>
        </div>
      </div>
       <div className='service'>
        <img src={program_3} />
        <div className='caption'>
            <p className='captionHeading'>1-on-1 Tutoring</p>
            <p>Personalized sessions to understand tough topics, solve problems, and stay ahead.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
