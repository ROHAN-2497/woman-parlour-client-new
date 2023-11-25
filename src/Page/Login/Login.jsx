import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const  from = location.state?.from?.pathname || "/";

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
        title: "User Login Successfully..",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidated = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true)
    }
  } 

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
              onBlur={handleValidated}
              type="text"
              placeholder="Type the captcha"
              name="captcha"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control m-6">
            <input
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
