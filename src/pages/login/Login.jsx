import styles from "./Login.module.scss";
import { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      console.log(res.data);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      {error && <p>{error}!</p>}
    </div>
  );
};

export default Login;
