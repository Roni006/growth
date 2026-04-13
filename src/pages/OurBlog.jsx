import React from "react";
import Container from "../components/Container";

const OurBlog = () => {
  return (
    <>
      <section className="py-10 bg-[#EFEFEF] ">
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurBlog;
