import Container from "../../src/components/Container";
import icon1 from '../../src/img/service/icon1.png'
import icon2 from '../../src/img/service/icon2.png'
import icon3 from '../../src/img/service/icon3.png'
import icon4 from '../../src/img/service/icon4.png'
import icon5 from '../../src/img/service/icon5.png'
import icon6 from '../../src/img/service/icon6.png'
const Service = () => {
const services =[
    {
        icon: icon1,
        title: "Finanlcial Planning"
    },

    {
        icon: icon2,
        title: "Investment Management"
    },

    {
        icon: icon3,
        title: "Retirement Planning"
    },

    {
        icon: icon4,
        title: "Specialiazed Services"
    },

    {
        icon: icon5,
        title: "Business Financial Services"
    },

    {
        icon: icon6,
        title: "Debt Management"
    },
]

  return (
    <>
    <section className="py-10 bg-[#EFEFEF]">
        <Container>
            <div> 
                {/* service:text  */}
                <div>
                    <h1 className="text-[75px] font-bold leading-[130%] text-[#552fff] max-w-[780px] mx-auto text-center"> Our Services for Financial Success</h1>  
                    <p className="text-[#222222] font-normal text-[20px] max-w-[550px] mx-auto mt-10 text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra venenatis est sed consequat.</p>  
                </div> 
                {/* service:text  */}
                
                {/* box content  */}
                <div className="mt-[70px] flex flex-wrap items-center justify-center gap-[50px]">
                    {services.map((service,i)=>(
                        <div key={i} className="bg-[#552FFF] py-8.5 px-[70px] w-[320px] text-center flex flex-col items-center justify-center gap-2.5 rounded-[20px]">
                            <img src={service.icon} alt="service image"/> 
                            <h6 className="font-bold text-[21px] text-[#ffffff] leading-[130%] ">{service.title}</h6>  
                        </div> 
                    ))}
                   
                </div>  
                {/* box content  */}
                </div>
        </Container>
    </section>
    </>
  )
}

export default Service