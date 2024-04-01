import styles from "./Register.module.scss";
import { useState } from "react";
import axios from "axios";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [toggleSeller, setToggleSeller] = useState(false);
  const [file, setFile] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    phone: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate("/");

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleToggleSeller = (event) => {
    setToggleSeller(!toggleSeller);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <form onSubmit={handleSubmit}>
        <div className={styles.left}>
          <h4>Register</h4>
          <label>
            Username
            <input
              name="username"
              type="text"
              placeholder="Idowu"
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="idowu@gmail.com"
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </label>
          <label>
            Profile Picture
            <input
              type="file"
              name="img"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <label>
            Country
            <input
              name="country"
              type="text"
              placeholder="Enter Country"
              onChange={handleChange}
            />
          </label>
          <button className={styles.left_button}>Register</button>
        </div>
        <div className={styles.right}>
          <h4>I want to become a seller</h4>
          <div className={styles.activate_seller}>
            <b>Acivate Seller Account:</b>

            <div
              className={
                toggleSeller
                  ? styles.toggle_wrapper_toggled
                  : styles.toggle_wrapper
              }
              onClick={handleToggleSeller}
            >
              <div
                className={
                  toggleSeller ? styles.toggle_ball_moved : styles.toggle_ball
                }
                onClick={handleToggleSeller}
              ></div>
              <label>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={handleSeller}
                />
              </label>
            </div>
          </div>
          <label htmlFor="">
            Phone Number{" "}
            <input type="phone" name="phone" onChange={handleChange} />
          </label>
          <label htmlFor="">
            Description
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="A short description of yourself"
              onChange={handleChange}
            ></textarea>
          </label>
          <button className={styles.right_button}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
