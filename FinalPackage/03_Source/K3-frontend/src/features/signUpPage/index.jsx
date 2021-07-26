import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import imageRegister from "../../common/image/register.svg";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import AuthApi from "../../api/authApi";

const SignUp = (props) => {
  const ContainerRef = useRef(null);
  const [changePage, setChange] = useState(false);
  const [run, setRun] = useState(false);
  const { register, handleSubmit } = useForm();
  const [succest, setSuccest] = useState(false);
  const [err, setErr] = useState(false);

  const changeLoginPage = () => {
    ContainerRef.current.classList.remove("sign-up-mode");
    setChange(true);
  };

  useEffect(() => {
    if (!changePage) return;
    setTimeout(() => {
      setRun(true);
    }, 1600);
  }, [changePage]);

  const onSubmit = async (value) => {
    try {
      const res = await AuthApi.SignUp(value);
      alert("Đăng kí thành công:))");
      setSuccest(true);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  return (
    <div class="container sign-up-mode" ref={ContainerRef}>
      {succest ? <Redirect to="/login" /> : ""}
      {run ? <Redirect to="/login" /> : ""}
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <input
              type="submit"
              class="btn"
              value="Sign up"
              onClick={handleSubmit(onSubmit)}
            />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel"></div>
        <div class="panel right-panel">
          <div class="content">
            <h3>WellCome To K3</h3>
            <p>
              If you have registered for an account successfully please login to
              experience our great services
            </p>
            <button
              onClick={changeLoginPage}
              class="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={imageRegister} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
