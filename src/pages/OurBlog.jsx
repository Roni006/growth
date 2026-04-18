import React from "react";
import Container from "../components/Container";

import blog1 from "../../src/img/blog/blog1.png";
import blog2 from "../../src/img/blog/blog2.png";
import blog3 from "../../src/img/blog/blog3.png";
import ContactUs from "./ContactUs";

const OurBlog = () => {
  return (
    <>
      <section className="pt-10 pb-75 bg-[#EFEFEF] ">
        <Container>
          <div>
            {/* top content  */}
            <div>
              <h1 className="text-[75px] font-bold leading-[130%] text-[#552fff] max-w-186.25 mx-auto text-center">
                Insights and Advice for Financial Success
              </h1>
              <p className="text-[#222222] font-normal text-[20px] max-w-137.5 mx-auto mt-10 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas viverra venenatis est sed consequat.
              </p>
            </div>
            {/* top content  */}

            {/* blog content  */}
            <div className="mt-[70px] grid grid-cols-3 items-center justify-center gap-[36px] ">
              <div className="w-[410px]">
                <div className="relative">
                  <span className="absolute top-3 left-3 font-normal font-overpass text-[16px] bg-[#552fff] text-white py-4 px-11.5 rounded-[15px] ">
                    Insight
                  </span>
                  <img className="w-full rounded-md" src={blog1} alt="" />
                </div>
                <p className="text-[18px] font-normal text-[#222222] font-poppins p-[10px_0_20px_0] ">
                  Sat Feb 18, 2023
                </p>
                <h3 className="text-[#552fff] font-semibold font-overpass text-[32px] leading-[130%] max-w-[310px] ">
                  Navigating the Path to Prosperity
                </h3>
              </div>

              <div className="w-[410px]">
                <div className="relative">
                  <span className="absolute top-3 left-3 font-normal font-overpass text-[16px] bg-[#552fff] text-white py-4 px-11.5 rounded-[15px] ">
                    Explore
                  </span>
                  <img className="w-full rounded-md" src={blog2} alt="" />
                </div>
                <p className="text-[18px] font-normal text-[#222222] font-poppins p-[10px_0_20px_0] ">
                  Tue May 28 2023
                </p>
                <h3 className="text-[#552fff] font-semibold font-overpass text-[32px] leading-[130%] max-w-[310px] ">
                  {" "}
                  Exploring Trends and Opportunities
                </h3>
              </div>

              <div className="w-[410px]">
                <div className="relative">
                  <span className="absolute top-3 left-3 font-normal font-overpass text-[16px] bg-[#552fff] text-white py-4 px-11.5 rounded-[15px] ">
                    Strategi
                  </span>
                  <img className="w-full rounded-md" src={blog1} alt="" />
                </div>
                <p className="text-[18px] font-normal text-[#222222] font-poppins p-[10px_0_20px_0] ">
                  Wed Jul 12 2023
                </p>
                <h3 className="text-[#552fff] font-semibold font-overpass text-[32px] leading-[130%] max-w-[310px] ">
                  Strategies for Financial Freedom
                </h3>
              </div>
            </div>
            {/* blog content  */}
          </div>
        </Container>

        <ContactUs />
      </section>
    </>
  );
};

export default OurBlog;
