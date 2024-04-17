'use client'
 import { Anton } from "next/font/google"
 import Link from "next/link"
  import { useState } from "react"
  import { FaBars } from "react-icons/fa6";
  
  import { GiCancel } from "react-icons/gi";

const anton= Anton({weight: ["400"] , style: ["normal"] ,subsets:[ "latin"] })

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <main className='text-[#eca336] border-b-2 border-[#eca336] flex  px-4 pb-4 mb-12 '>
      {/* menu */}
      <div className="hidden md:flex md:w-full ">
      <div className=' w-2/5 flex pl-8 font-bold text-4xl pt-8'>

            <div className={anton.className} >AYRTON SOSA</div>
      </div>
        <div className='flex w-2/5 justify-between items-center text-center'>
        <Link href='/#home' className="hover:text-black hover:bg-[#eca336] h-full px-4 pb-4 pt-8 w-full rounded-b-2xl ">
        <div>Inicio</div>
        </Link>
        <Link href='/#about' className="hover:text-black hover:bg-[#eca336] h-full px-4 pb-4 pt-8 w-full rounded-b-2xl ">
          <div>Sobre mi</div>
          </Link>
        <Link href='/#gallery' className="hover:text-black hover:bg-[#eca336] h-full px-4 pb-4 pt-8 w-full rounded-b-2xl ">
        <div>Galería</div>
        </Link>
        <Link href='/#contact' className="hover:text-black hover:bg-[#eca336] h-full px-4 pb-4 pt-8 w-full rounded-b-2xl ">
       <div>Contacto</div>
        </Link>
        </div>
         
        </div>
  {/* hambur */}
<div className="md:hidden flex w-full justify-end pt-4">
{!nav?(
  <div  onClick={handleClick} >
    <FaBars/>
   
  </div>
):(
<div className="flex flex-col w-screen h-screen text-center gap-8">
  <div  onClick={handleClick} className="flex w-full justify-end"><GiCancel /></div>
  <Link href='/#home' >
        <div>Inicio</div>
        </Link>
        <Link href='/#about' >
          <div>Sobre mi</div>
          </Link>
        <Link href='/#gallery' >
        <div>Galería</div>
        </Link>
        <Link href='/#contact' >
       <div>Contacto</div> 
        </Link>
</div>)}
</div>

    </main>
  )
}

export default NavBar