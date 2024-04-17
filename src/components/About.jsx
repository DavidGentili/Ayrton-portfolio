import React from 'react'
import { Anton } from 'next/font/google'

const anton= Anton({weight: ["400"] , style: ["normal"] ,subsets:[ "latin"] })

const About = () => {
  return (
    <div id='about' className='h-screen'>
      <div className='text-[#eca336] border-b-2 border-[#eca336] w-96 text-6xl py-10 '>
        <div className={anton.className}>SOBRE MI</div>
      </div>
    </div>
  )
}

export default About