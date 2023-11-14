import Banner from "../Banner/Banner";
import HappyCustomar from "../HappyCustomar/HappyCustomar";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mb-20">
      <Banner/>
      <Service/>
      <HappyCustomar/>
      <Testimonials/>

    </div>
  );
};

export default Home;
