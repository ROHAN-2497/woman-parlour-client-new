import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Container from "../../../Components/Container";
const Testimonials = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center py-20">Testimonials</h1>
      <Container>
       <div className="grid  md:grid-cols-3  gap-10 pl-6 px-4 ">
       <div >
          <div>
            <div className="">
              <div>
                <div className="flex gap-4 ">
                  <div>
                    <img
                      src="/src/assets/images/Ellipse 90.png"
                      className="w-[64px] h-[64px]"
                      alt="Shoes"
                    />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-bold">
                      Nash Patrik
                    </h2>
                    <h3 className="text-1xl font-bold">CEO, Manpol</h3>
                  </div>
                </div>

                <div className="">
                  <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
                  </p>
                </div>
                <Rating style={{ maxWidth: 80 }} value={5} readOnly />
              </div>
            </div>
          </div>
        </div>  
       <div >
          <div>
            <div className="">
              <div>
                <div className="flex gap-4 ">
                  <div>
                    <img
                      src="/src/assets/images/Ellipse 91.png"
                      className="w-[64px] h-[64px]"
                      alt="Shoes"
                    />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-bold">
                    Miriam Barron
                    </h2>
                    <h3 className="text-1xl font-bold">CEO, Manpol</h3>
                  </div>
                </div>

                <div className="">
                  <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
                  </p>
                </div>
                <Rating style={{ maxWidth: 80 }} value={5} readOnly />
              </div>
            </div>
          </div>
        </div>  
       <div>
          <div>
            <div className="">
              <div>
                <div className="flex gap-4 ">
                  <div>
                    <img
                      src="/src/assets/images/Ellipse 92.png"
                      className="w-[64px] h-[64px]"
                      alt="Shoes"
                    />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-bold">
                    Bria Malone
                    </h2>
                    <h3 className="text-1xl font-bold">CEO, Manpol</h3>
                  </div>
                </div>

                <div className="">
                  <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
                  </p>
                </div>
                <Rating style={{ maxWidth: 80 }} value={5} readOnly />
              </div>
            </div>
          </div>
        </div>  
       </div>
      </Container>
    </div>
  );
};

export default Testimonials;
