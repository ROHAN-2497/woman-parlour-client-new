import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidated = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log("user_captcha_value", user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
    }
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
              type="text"
              ref={captchaRef}
              placeholder="Type the captcha"
              name="captcha"
              className="input input-bordered"
              required
            />
          </div>
          <button
            onClick={handleValidated}
            className="btn btn-outline m-6 btn-xs"
          >
            Validate
          </button>

          <div className="form-control mb-6">
            <input
              disabled={disable}
              type="submit"
              value="Login"
              className="btn bg-pink-600 text-white"
            />
          </div>
          <div className="">
            <Link>
              Don't have an account?{" "}
              <span className="text-1xl font-semibold">Create an account</span>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
