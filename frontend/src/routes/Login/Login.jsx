import {useEffect, useState} from "react"
import LoginPage from "../../components/LoginPage/LoginPage"

function Login() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8800/usuarios')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default Login