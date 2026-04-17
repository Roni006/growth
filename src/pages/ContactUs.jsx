import React from 'react'
import Container from '../components/Container'

const ContactUs = () => {
  return (
    <>
      <section className="py-10 bg-[#eeeeee] ">
        <Container className="bg-[#b4aeae] ">
          <div className="flex items-center gap-12.5">
            {/* left part  */}
            <div className="w-110 ">
              <h1 className="text-[#552fff] font-overpass text-[64px] leading-[130%] font-bold ">
                Contact Us for a Customized Financial Plan
              </h1>
            </div>

            {/* right part  */}
            <div className="w-163.5 ">
              <p className="text-[18px] font-normal font-poppins text-[#222222] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas viverra venenatis est sed consequat.
              </p>
              <div>
                <form className="flex items-center" action="#">
                  <input
                    className="bg-white text-[18px] font-normal text-[737373] leading-[130%] font-overpass w-full py-5 px-12.5 rounded-[50px_0_0_50px] outline-0"
                    type="text"
                    placeholder="Your Email Address..."
                  />
                  <button
                    type="submit"
                    className="text-white font-overpass text-[20px] font-medium bg-[#552fff] rounded-full py-4.5 px-15 cursor-pointer -ml-4"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactUs