import card1 from "../../../../src/assets/icons/Group 1373.png";
import card2 from "../../../../src/assets/icons/Group 1372.png";
import card3 from "../../../../src/assets/icons/Group 1374.png";
import Container from "../../../Components/Container";
const Service = () => {
  return (
    <div className="py-20">
      <h3 className="text-3xl font-bold text-center">
        Our Awesome <span className="text-pink-600">Service</span>
      </h3>
    <Container>
    <div className="mt-20  md:pl-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card w-96 bg-gray-100 hover:shadow-xl p-10">
          <img src={card1} alt="Shoes" className="w-[72px] h-[72px] mx-auto" />
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Anti Age Face Treatment </h2>
            <span className="text-pink-600 text-1xl font-bold">$199</span>
            <p>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-gray-100 hover:shadow-xl p-10">
          <img src={card2} alt="Shoes" className="w-[72px] h-[72px] mx-auto " />
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Hair Color & Styleing </h2>
            <span className="text-pink-600 text-1xl font-bold">$99</span>
            <p>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-gray-100 hover:shadow-xl p-12">
          <img src={card3} alt="Shoes" className="w-[72px] h-[72px] mx-auto" />
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Skin Care Treatment</h2>
            <span className="text-pink-600 text-1xl font-bold">$299</span>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-secondary mt-20 bg-pink-600">Explore More</button>
      </div>{" "}
    </Container>
    </div>
  );
};

export default Service;
