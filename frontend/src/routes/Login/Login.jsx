import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <p>
          <Link to="/login/1">login 1</Link>
        </p>
        <p>
          <Link to="/login/2">login 2</Link>
        </p>
        <p>
          <Link to="/login/3">login 3</Link>
        </p>
    </div>
  )
}

export default Login