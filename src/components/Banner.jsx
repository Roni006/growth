import React from 'react'
import Container from './Container'

const Banner = () => {
const box = [
  {
    num: "15+",
    text: "Years Experience"
  },
  {
    num: "75%",
    text: "Growth Rate"
  },
  {
    num: "120+",
    text: "Active Country"
  },
]

  return (
    <>
    <section className='py-[90px] bg-[#552FFF]'>
        <Container>
            <div>
                <div className='w-[800px]'>
                    <h1 className='text-[105px] text-white leading-[115px] font-bold  '>We Build Your Financial Future</h1>
                    <p className='text-white font-normal text-[20px] pt-10 pb-8 '>Planning your financial future requires clarity, discipline, and the right strategy. We help you build a secure path by analyzing your goals, managing risks, and creating sustainable investment solutions tailored to your needs.</p>

                    <div className="flex items-center gap-[30px]">
                     {
                       box.map((card,i)=>(
                        <div className="py-7.5 px-2.5 bg-white w-[195px] text-center rounded-[20px] ">
                        <h2 className="text-[32px] leading-[42px] text-[#222222] font-bold ">
                          {card.num}
                        </h2>
                      <p className="text-[16px] font-medium text-[#222222]  ">{card.text}</p>
                      </div>
                       ))
                     }
                   
                    </div> 

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