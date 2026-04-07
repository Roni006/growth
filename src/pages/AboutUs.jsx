import Container from "../../src/components/Container";
import check from "../../src/icons/check.svg";

const AboutUs = () => {
  return (
    <>
      <section className="py-28  bg-[#EFEFEF]">
        <Container>
          <div>
            <h1 className="text-[#552FFF] text-[75px] leading-21.25 font-bold w-297.5 ">
              Discover Our Financial Expertise and Commitment
            </h1>

            <div>
              <div>
                <p className="text-[20px] font-normal text-[#222222] pt-10 pb-6 w-159   ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas viverra venenatis est sed consequat.
                </p>
                <p className="text-[20px] font-normal text-[#222222]  pb-9 w-159   ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  quis gravida justo. Vivamus enim augue, aliquet vel elit nec,
                  suscipit tempor tellus.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div>
                      <div className="relative w-12.5 h-12.5 bg-[#552fff] rounded-lg ">
                        <img className="absolute left-3 top-0 " src={check} />
                      </div>
                    </div>

                    <span className="text-[32px] text-[#222222] leadigng-[42px] font-medium ">
                      24/7 Free Consulation
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <div>
                      <div className="relative w-12.5 h-12.5 bg-[#552fff] rounded-lg ">
                        <img className="absolute left-3 top-0 " src={check} />
                      </div>
                    </div>

                    <span className="text-[32px] text-[#222222] leadigng-[42px] font-medium ">
                      24/7 Free Consulation
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <div>
                      <div className="relative w-12.5 h-12.5 bg-[#552fff] rounded-lg ">
                        <img className="absolute left-3 top-0 " src={check} />
                      </div>
                    </div>

                    <span className="text-[32px] text-[#222222] leadigng-[42px] font-medium ">
                      24/7 Free Consulation
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <div>
                      <div className="relative w-12.5 h-12.5 bg-[#552fff] rounded-lg ">
                        <img className="absolute left-3 top-0 " src={check} />
                      </div>
                    </div>

                    <span className="text-[32px] text-[#222222] leadigng-[42px] font-medium ">
                      24/7 Free Consulation
                    </span>
                  </div>
                </div>

                <button className="text-white font-bold text-[24px] bg-[#552FFF] py-4.5 px-18.75 rounded-2xl mt-15  ">
                  Read More
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
