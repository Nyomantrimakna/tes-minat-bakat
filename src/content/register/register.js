import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import LoginImg from "../../component/image/Loginpage_img_computer.png";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://asia-southeast1-capstone-project-382606.cloudfunctions.net/app/api/register",
        {
          email,
          password,
          username,
        }
      );

      console.log(response.data);
      toast.success("Silahkan Menuju Halaman Login !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // do something after successful registration
    } catch (error) {
      console.error(error);
      toast.warning("Gagal Melakukan Register !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // handle error case here
    }
  };

  return (
    <div className="signup-content-box">
      <div className="main-content-signup">
        <ToastContainer />
        <h2 className="header-signup">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="email-input-box">
            <label className="label-email" htmlFor="email">
              Email*
            </label>
            <input
              className="email-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <br />
          <div className="password-input-box">
            <label className="label-password" htmlFor="password">
              Password*
            </label>
            <input
              className="password-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <br />
          <div className="username-input-box">
            <label className="label-username" htmlFor="username">
              Username*
            </label>
            <input
              className="username-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
            />
          </div>
          <br />
          <button className="btn-signup-new" type="submit">
            Register
          </button>
          <div>
            <Link to="/">
              <button className="btn-to-login">Login</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="image-content">
        <img className="image-signup" src={LoginImg} alt="login page" />
      </div>
    </div>
  );
}

export default RegisterForm;
