import React from 'react'
import { Anton } from 'next/font/google';
const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Contact = () => {
  return (
    <div id='contact' className='h-full'>
      {/* web design */}
      <div className='hidden md:flex'>

       <div className="text-[#eca336] border-b-2 border-[#eca336]  w-96  text-6xl py-10 ">
          <div className={anton.className}>CONTACTO</div>
        </div>
      </div>
      {/* mobile design */}
      <div className='md:hidden flex'>
      <div className="text-[#eca336] border-b-2 border-[#eca336]    text-3xl py-5 ">
          <div className={anton.className}>CONTACTO</div>
        </div>
      </div>
    </div>
  )
}

export default Contact