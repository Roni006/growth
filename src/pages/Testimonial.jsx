import Container from "../components/Container";

const Testimonial = () => {
  return (
    <>
      <section className="py-10">
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
