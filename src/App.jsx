import Navbar from "./Common/Navbar";
import Banner from "../src/pages/Banner";
import AboutUs from "../src/pages/AboutUs";
import Service from "../src/pages/Service";
import FinancialTeam from "../src/pages/FinancialTeam";
import Testimonial from "./pages/Testimonial";
import OurBlog from "./pages/OurBlog";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Service/>
      <FinancialTeam/>
      <Testimonial/>
      <OurBlog/>
    </>
  );
}

export default App;
