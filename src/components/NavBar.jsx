'use client'
 import { Anton } from "next/font/google"
 import Link from "next/link"
  import { useState } from "react"
  import { LiaBarsSolid } from "react-icons/lia";
  
  import { IoMdClose } from "react-icons/io";
  import { MdOutlineArrowForward } from "react-icons/md";

const anton= Anton({weight: ["400"] , style: ["normal"] ,subsets:[ "latin"] })

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <main className='text-[#eca336] border-b-2 border-[#eca336] flex   z-10  items-center bg-black/50 fixed bg-nav w-full'>
      {/* menu */}
      <div className="hidden md:flex md:w-full">
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
<div className="md:hidden flex w-full ">
{!nav?(
  <div className="flex w-full justify-between px-4 h-[114px] items-center"  >
    <div className={`${anton.className} text-xl `} >AYRTON SOSA</div>
   <div><LiaBarsSolid size={30} onClick={handleClick}/></div> 
   
  </div>
):(
<div className="flex flex-col w-full h-screen  items-center ">
  <div  className="flex w-full justify-between border-b-2 border-[#eca336] items-center px-4 h-[114px]">
  <div className={`${anton.className} text-xl `} >AYRTON SOSA</div>
   <div > <IoMdClose size={35}  onClick={handleClick}/></div> 

   </div>
  <div className="text-2xl   grid grid-rows-4  w-full pt-5"onClick={handleClick}>
  <Link href='/#home' className="border-[#eca336] border-b-2 w-full  h-[114px]  ">
        <div className="flex items-center h-full w-full justify-between px-4 ">Inicio
        <MdOutlineArrowForward size={35}/></div>
        
        </Link>
        <Link href='/#about'  className="border-[#eca336] border-b-2 w-full  h-[114px] ">
          <div className="flex items-center h-full w-full justify-between px-4 ">Sobre mi
          <MdOutlineArrowForward size={35}/></div>
          
          </Link>
        <Link href='/#gallery'  className="border-[#eca336] border-b-2 w-full  h-[114px] ">
        <div className="flex items-center h-full w-full justify-between px-4">Galería
        <MdOutlineArrowForward size={35}/></div>
        
        </Link>
        <Link href='/#contact'  className="border-[#eca336] border-b-2 w-full  h-[114px] ">
       <div className="flex items-center h-full w-full justify-between px-4">Contacto
       <MdOutlineArrowForward size={35}/></div>
        
        </Link>
        </div>
</div>)}
</div>

    </main>
  )
}

export default NavBar