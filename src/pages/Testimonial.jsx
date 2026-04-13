import Container from "../components/Container";

import Testimonial1 from "../../src/img/testimonial/testi-1.png";
import Testimonial2 from "../../src/img/testimonial/testi-2.png";
import Testimonial3 from "../../src/img/testimonial/testi-3.png";

const Testimonial = () => {
  const testimonials = [
    {
      img: Testimonial1,
      name: "Kyle Winder",
      position: "Internal Data Facilitator",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },

    {
      img: Testimonial2,
      name: "Julio Hickle",
      position: "District Web Administrator",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },

    {
      img: Testimonial3,
      name: "Lee Beahanr",
      position: "Regional Web Planner",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
  ];
  return (
    <>
      <section className="py-10 bg-[#EFEFEF]">
        <Container>
          <div>
            {/* top content  */}
            <div>
              <h1 className="text-[75px] font-bold leading-[130%] text-[#552fff] max-w-247.5 mx-auto text-center">
                Words of Trust Testimonials from Satisfied Clients
              </h1>
              <p className="text-[#222222] font-normal text-[20px] max-w-[550px] mx-auto mt-10 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas viverra venenatis est sed consequat.
              </p>
            </div>
            {/* top content  */}

            {/* testtmonial content  */}
            <div className="mt-17.5 grid grid-cols-3 items-center justify-center gap-16">
              {testimonials.map((item, i) => (
                <div className="max-w-95 bg-[#552FFF] flex flex-col items-center justify-center text-center rounded-[20px] py-17.5 px-12.5">
                  <img src={item.img} alt="Testimonial 1" />
                  <h3 className="text-white font-normal text-[32px] leading-[130%] pt-5.5 pb-3 ">
                    {item.name}
                  </h3>
                  <span className="font-normal text-[16px] text-white leading-[130%] ">
                    {item.position}
                  </span>
                  <p className="font-normal text-white text-[20px] pt-7.5  ">
                    {item.feedback}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
