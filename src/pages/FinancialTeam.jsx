import Container from "../../src/components/Container";
import team1 from "../../src/img/team/team1.png";
import team2 from "../../src/img/team/team2.png";
import team3 from "../../src/img/team/team3.png";
import team4 from "../../src/img/team/team4.png";
const FinancialTeam = () => {
  return (
    <>
      <section className="py-10">
        <Container>
          <div>
            {/* top content  */}
            {/* service:text  */}
            <div>
              <h1 className="text-[75px] font-bold leading-[130%] text-[#552fff] max-w-[780px] mx-auto text-center">
                {" "}
                Our Professional Financial Team
              </h1>
              <p className="text-[#222222] font-normal text-[20px] max-w-[550px] mx-auto mt-10 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas viverra venenatis est sed consequat.
              </p>
            </div>
            {/* service:text  */}

            {/* bottom content  */}
            <div className="grid grid-cols-4 items-center justify-center gap-8.5 mt-[70px]">

              <div className="text-center w-[300px]" >
                <img className="rounded-[20px] mb-5.75 " src={team1} />
                <h2 className="text-[#552fff] font-semibold text-[32px] leading-[130%] ">Kyle Winder</h2>
                <p className="text-[#222222] font-normal leading-[130%] text-[20px] pt-1 ">Managing Director</p>
              </div>

              <div className="text-center w-[300px]" >
                <img className="rounded-[20px] mb-5.75 " src={team1} />
                <h2 className="text-[#552fff] font-semibold text-[32px] leading-[130%] ">Kyle Winder</h2>
                <p className="text-[#222222] font-normal leading-[130%] text-[20px] pt-1 ">Managing Director</p>
              </div>

              <div className="text-center w-[300px]" >
                <img className="rounded-[20px] mb-5.75 " src={team1} />
                <h2 className="text-[#552fff] font-semibold text-[32px] leading-[130%] ">Kyle Winder</h2>
                <p className="text-[#222222] font-normal leading-[130%] text-[20px] pt-1 ">Managing Director</p>
              </div>
              
              <div className="text-center w-[300px]" >
                <img className="rounded-[20px] mb-5.75 " src={team1} />
                <h2 className="text-[#552fff] font-semibold text-[32px] leading-[130%] ">Kyle Winder</h2>
                <p className="text-[#222222] font-normal leading-[130%] text-[20px] pt-1 ">Managing Director</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FinancialTeam;
