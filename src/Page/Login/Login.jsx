import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useReducer, useRef } from "react";

const Login = () => {
 
  const captchaRef = useRef(null)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidated = () =>{

  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <Container>
      <div className=" md:w-full md:flex flex-col justify-center items-center py-20">
        <form
          onSubmit={handleLogin}
          className="md:w-30%] border-2 border-pink-100 px-4 m-4 py-4"
        >
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
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              type="password"
              placeholder="Type the captcha"
              name="recaptcha"
              className="input input-bordered"
              required
            />
          </div>
          <button onClick={handleValidated} className="btn btn-outline m-6 btn-xs">Validate</button>

          <div className="form-control mb-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-pink-600 text-white"
            />
          </div>
          <div className="">
            <Link>
              Don’t have an account?{" "}
              <span className="text-1xl font-semibold">Create an account</span>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
