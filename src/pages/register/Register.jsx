import { Link } from "react-router-dom"
import "./Register.scss"
import { useState } from "react"

const Register = () => {

  const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:"",
      name:""

  });

  const handleChange = (e)=>{
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));

  };
  console.log(inputs);

  return (
    <div className="register">
      <div className="card">
      
        <div className="left">
            <h1>Friend Book.</h1>
            <p>Connect with friends and the world around you on Hellow World. Dive into a vibrant community where sharing, discovering, and staying connected is effortless and fun.</p>
            <span>Do you have an account?</span>
            <Link to="/login"><button>Login</button></Link> 
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                <button>Register</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register
