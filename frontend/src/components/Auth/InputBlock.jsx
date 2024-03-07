/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth.hook";
import { logIn, register } from "../../api/axios";

const InputBlock = ({ isLogin, setIsLogin }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setIsHide] = useState(true);

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const pass = document.getElementById("pass");
    if (!isHide) {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }, [isHide]);

  const OnFormSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const userData = {
        username: userName,
        email,
        password,
      };
      try {
        const { data } = await logIn(userData);
        const { loggedInUser, accessToken } = data.data;
        setAuth({ loggedInUser, accessToken });
        navigate("/");
      } catch (error) {
        if (!error?.originalStatus) {
          alert("No Server Response");
        } else if (error.originalStatus === 400) {
          alert("Missing Username or Password");
        } else if (error.originalStatus === 401) {
          alert("Unauthorized");
        } else {
          alert("Login Failed");
        }
        console.log("Log In failed !! ");
      }
    } else {
      console.log("Registration");
      const registerData = {
        username: userName,
        fullName: name,
        email,
        password,
      };
      try {
        await register(registerData);
        setIsLogin(!isLogin);
      } catch (error) {
        if (!error?.originalStatus) {
          alert("No Server Response");
        } else if (error.originalStatus === 400) {
          alert("Missing Username or Password");
        } else if (error.originalStatus === 401) {
          alert("Unauthorized");
        } else {
          alert("Login Failed");
        }
        console.log("Log In failed !! ");
      }
    }
  };
  return (
    <div className="input_block">
      <div className="right_regis register_right">
        <div className="headTag">
          <h1>{!isLogin ? "Registration" : "Log In"}</h1>
        </div>
        <form method="post">
          <div className="input-box">
            <input
              type="text"
              name="username"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label htmlFor="username">User Name</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
            </svg>
          </div>
          {!isLogin && (
            <div className="input-box">
              <input
                type="text"
                name="name"
                id=""
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="name">Full Name</label>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5ZM7.52746 17H16.4725C16.2238 14.75 14.3163 13 12 13C9.68372 13 7.77619 14.75 7.52746 17Z"></path>
              </svg>
            </div>
          )}

          <div className="input-box">
            <input
              type="email"
              name="email"
              id=""
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(204,204,204,0.92)"
            >
              <path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"></path>
            </svg>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="pass"
              id="pass"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label htmlFor="pass">Password</label>
            <span onClick={() => setIsHide(!isHide)}>
              {isHide ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM11 15.7324V18H13V15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z"></path>
                </svg>
              )}
            </span>
          </div>
          <div className={isLogin ? "agree-box forgetPass_box" : "agree-box"}>
            {!isLogin ? (
              <span>
                <input type="checkbox" name="agreement" className="pointer" /> I agree with terms &
                conditions
              </span>
            ) : (
              <>
                <span>
                  <input type="checkbox" name="agreement" className="pointer" /> Remember Me
                </span>
                <a href="#">Forget Password?</a>
              </>
            )}
          </div>
          <button className="submit_btn" onClick={OnFormSubmit}>
            {isLogin ? "Log In" : "Submit"}
          </button>
        </form>
        <div className="optional">
          <p>
            {isLogin ? " Already have an Account? " : "New Here? Please👉 "}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              <span href="#" className="cursor-pointer">
                {isLogin ? "Log In" : "Register"}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
