import { Link } from "react-router-dom";
import Container from "../../Components/Container";

const Login = () => {
  return (
    <Container>
      <div className=" w-full md:flex flex-col justify-center items-center py-20">
        <form className="w-[30%] border-2 border-pink-100 px-4 py-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link className="">
                Don’t have an account?{" "}
                <span className="text-1xl font-semibold">
                  Create an account
                </span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn bg-pink-600 text-white"/>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
