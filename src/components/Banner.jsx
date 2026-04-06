import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <>
    <section className='py-[90px] bg-[#552FFF]'>
        <Container>
            <div>
                <div className='w-[800px]'>
                    <h1 className='text-[105px] text-white leading-[115px] font-bold  '>We Build Your Financial Future</h1>
                    <p className='text-white font-normal text-[20px] pt-10 pb-[15] '>Planning your financial future requires clarity, discipline, and the right strategy. We help you build a secure path by analyzing your goals, managing risks, and creating sustainable investment solutions tailored to your needs.</p>

                    <button className='font-bold text-[24px] text-[#222222] bg-white py-3.5 px-[76px] rounded-full inline-block mt-[35px] border-2 border-white hover:bg-transparent hover:text-white duration-300 ease-in-out cursor-pointer'>Get Started</button>
                </div>
                <div></div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Banner