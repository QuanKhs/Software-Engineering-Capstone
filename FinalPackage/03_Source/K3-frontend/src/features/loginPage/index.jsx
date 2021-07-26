import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import imageLogin from "../../common/image/log.svg";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { isLoginOn } from "../../app/authSlide";
import AuthApi from "../../api/authApi";

const Login = (props) => {
  const [changePage, setChange] = useState(false);
  const [run, setRun] = useState(false);
  const ContainerRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const changeSignUpPage = () => {
    ContainerRef.current.classList.add("sign-up-mode");
    setChange(true);
  };

  useEffect(() => {
    if (!changePage) return;
    setTimeout(() => {
      setRun(true);
    }, 1600);
  }, [changePage]);

  const onSubmit = async (value) => {
    console.log(value);
    try {
      const res = await AuthApi.Login(value);
      localStorage.setItem("userID", res.user.id);
      localStorage.setItem("token", res.accessToken);
       dispatch(isLoginOn());
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div class="container" ref={ContainerRef}>
      {run ? <Redirect to="/signup" /> : ""}
      <div class="forms-container">
        <div class="signin-signup">
          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
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
            <input
              onClick={handleSubmit(onSubmit)}
              type="submit"
              value="Login"
              class="btn solid"
            />
            <p class="social-text">Or Sign in with social platforms</p>
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
          {/* ///////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New member ?</h3>
            <p>If you don't have an account, please register to continue</p>
            <button
              onClick={changeSignUpPage}
              class="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={imageLogin} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
