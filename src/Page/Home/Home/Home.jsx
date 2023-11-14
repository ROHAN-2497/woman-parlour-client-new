import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HappyCustomar from "../HappyCustomar/HappyCustomar";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div >
      <Banner/>
      <Service/>
      <HappyCustomar/>
      <Testimonials/>
      <Contact/>

    </div>
  );
};

export default Home;
