import "./Login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Connect with friends and the world around you on Hellow World. Dive into a vibrant community where sharing, discovering, and staying connected is effortless and fun.</p>
            <span>Don't have an account?</span>
            <button>Register</button>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
