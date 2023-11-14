import Container from "../../../Components/Container";
import banner from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div className="bg-pink-50 ">
      <Container>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-0">
          <div className=" md:w-1/2 px-5">
            <h2 className="text-4xl font-bold text-black py-6">
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </h2>
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <button className="btn bg-pink-600 text-white">
              Get on Appointment
            </button>
          </div>
          <div className="p-5 w-full md:w-1/2 ">
            <img className="" src={banner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
