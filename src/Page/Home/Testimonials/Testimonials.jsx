import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <div className="card  bg-base-100 shadow-xl">
        <div>
          <div className="flex items-center gap-4">
            <div>
              <div>
                <div>
                  <img
                    src="/src/assets/images/Ellipse 90.png"
                    className="w-[64px] h-[64px]"
                    alt="Shoes"
                  />
                </div>
                <div>
                  <h2 className="card-title text-2xl font-bold">Nash Patrik</h2>
                  <h3 className="text-1   xl font-bold">CEO, Manpol</h3>
                </div>
              </div>

              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{" "}
                </p>
              </div>
              <Rating style={{ maxWidth: 80 }} value={5} readOnly />
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="/src/assets/images/Ellipse 90.png"
                    className="w-[64px] h-[64px]"
                    alt="Shoes"
                  />
                </div>
                <div>
                  <h2 className="card-title text-2xl font-bold">Nash Patrik</h2>
                  <h3 className="text-1   xl font-bold">CEO, Manpol</h3>
                </div>
              </div>

              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{" "}
                </p>
              </div>
              <Rating style={{ maxWidth: 80 }} value={5} readOnly />
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="/src/assets/images/Ellipse 90.png"
                    className="w-[64px] h-[64px]"
                    alt="Shoes"
                  />
                </div>
                <div>
                  <h2 className="card-title text-2xl font-bold">Nash Patrik</h2>
                  <h3 className="text-1   xl font-bold">CEO, Manpol</h3>
                </div>
              </div>

              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{" "}
                </p>
              </div>
              <Rating style={{ maxWidth: 80 }} value={5} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
