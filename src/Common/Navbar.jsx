import React from 'react'
import Container from '../components/Container'

const Navbar = () => {
  return (
    <>
    <header className='bg-[#552FFF] '>
        <Container>
           <div className='flex items-center justify-between py-5'>
            <div>
                <a href="/">
                <h1 className='text-white font-bold text-[40px]'>Growth</h1>
                </a> 
            </div>
            <div className='flex items-center gap-[50px]'>
                <nav>
                    <ul className='flex items-center gap-10'>
                        <li className='text-[22px] font-normal text-white '><a href="/">Home</a></li>
                        <li  className='text-[22px] font-normal text-white '><a href="#">Services</a></li>
                        <li  className='text-[22px] font-normal text-white '><a href="#">Blog</a></li>
                        <li  className='text-[22px] font-normal text-white '><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div>
                    <button className='bg-[#7056e0] text-white text-[22px] font-medium py-2 px-4 cursor-pointer border-3  border-[#7056e0] rounded-md hover:bg-transparent hover:border-[#ffffff] duration-300 ease-in-out'>Get in Touch</button>
                </div>
            </div>
           </div>
        </Container>
    </header>
    </>
  )
}

export default Navbar