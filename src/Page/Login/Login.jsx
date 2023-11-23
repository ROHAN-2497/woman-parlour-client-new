import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import Swal from 'sweetalert2'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Result } from "postcss";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      

    });
  }

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
            Don't have an account?{" "}
            <span className="text-1xl font-semibold">
              <Link to="/signup">Create an account</Link>
            </span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
