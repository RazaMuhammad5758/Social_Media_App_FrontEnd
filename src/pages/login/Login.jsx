import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      setErr(null); 
    } catch (error) {
      if (error.response) {
        setErr(error.response.data); // HTTP error response
      } else {
        setErr("An unexpected error occurred."); // Other errors
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Connect with friends and the world around you on Hellow World. Dive
            into a vibrant community where sharing, discovering, and staying
            connected is effortless and fun.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register"><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {err && <span className="error">{err}</span>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
