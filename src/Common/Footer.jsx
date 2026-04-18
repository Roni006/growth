import React from "react";
import Container from "../components/Container";

const Footer = () => {
  return (
    <>
      <section className="bg-[#552FFF] pt-48.5 pb-21">
        <Container>
          <div className="flex items-center justify-between gap-[80px]">
            {/* item 1 */}
            <div className="max-w-105">
              <a href="/">
                <h1 className="text-white font-bold text-[40px]">Growth</h1>
              </a>
              <p className="text-white font-normal font-poppins text-[18px] pt-8">
                Lorem ipsum dolor sit amet, consectetur adipisci elit. Donec
                ultricies mi in ipsum vehicula lacinia. Iner porttitor ac libero
              </p>
            </div>
            {/* item 2 */}
            <div className="max-w-[150p]">
              <h5 className="text-white text-[24px] font-medium font-overpass pb-4">
                Pages
              </h5>
              <ul className="flex flex-col gap-y-1">
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Our Blog</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Our Team</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Testimonial</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">CTA</a>
                </li>
              </ul>
            </div>
            {/* item 3 */}
            <div className="max-w-[150p]">
              <h5 className="text-white text-[24px] font-medium font-overpass pb-4">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-y-1">
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Home</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">About Us</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Our Services</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            {/* item 4 */}
            <div className="max-w-[150p]">
              <h5 className="text-white text-[24px] font-medium font-overpass pb-4">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-y-1">
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Home</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">About Us</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Our Services</a>
                </li>
                <li className="text-white text-[18px] font-medium font-poppins">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div> 
            <div></div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
