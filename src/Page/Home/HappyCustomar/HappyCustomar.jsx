import Container from "../../../Components/Container";

const HappyCustomar = () => {
  return (
    <div className="bg-pink-50 py-32  ">
      <Container>
        <div className="flex w-full flex-col md:flex-row gap-7 ">
          <div className="md:w-1/2">
            <img
              src="/src/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"
              className="p-6 rounded-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-5 md:p-0  md:pl-20">
            <h1 className="text-xl md:text-5xl font-bold">
              Let us handle your screen{" "}
              <span className="text-pink-600">Professionally</span>.
            </h1>
            <p className="py-6 ">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="flex gap-24">
              <div className="">
                <h3 className="text-pink-600 text-5xl font-bold">500+</h3>
                <p>Happy Customer</p>
              </div>
              <div>
                <h1 className="text-pink-600 text-5xl font-bold ">16+</h1>
                <p>Total Service</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HappyCustomar;
