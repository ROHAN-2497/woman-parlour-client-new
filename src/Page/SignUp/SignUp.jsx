import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import { useForm } from "react-hook-form";
import { createContext } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggeduser = result.user;
      console.log(loggeduser);
    });
  };

  return (
    <Container>
      <div className="hero min-h-screen bg-pink-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 max-w-sm w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onsubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    pattern: /^[A-Za-z]+/,
                    min: 6,
                    max: 20,
                  })}
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "pattern" && (
                  <p role="alert">
                    <span className="text-red-500">
                      password must have one upperCase, one lower case, one
                      specialCharecter{" "}
                    </span>
                  </p>
                )}
                {errors.password?.type === "min" && (
                  <p role="alert">
                    <span className="text-red-500">password must required</span>
                  </p>
                )}
                {errors.password?.type === "max" && (
                  <p role="alert">
                    <span className="text-red-500">password is required</span>
                  </p>
                )}
                {errors.password?.type === "required" && (
                  <p role="alert">
                    <span className="text-red-500">password is required</span>
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-pink-600 text-white"
                  type="submit"
                  value="Create an account"
                />
              </div>
              <p>
                <small>
                  Already hava an account ?{" "}
                  <Link className="text-1xl font-semibold" to="/login">
                    <span className="text-pink-600">Login</span>
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
