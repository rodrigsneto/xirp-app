import { useParams, useNavigate } from "react-router-dom"

const LoginDetails = () => {
    const {id} = useParams();


    const navigate = useNavigate()

    const handleLogin = () => {
        console.log("Login feito")
        return navigate("/")
    }


  return (
    <div>
        <h2>Exibindo mais informacoes do Login: {id}</h2>
        <button onClick={handleLogin}>Fazer Login</button>
    </div>
    
  )
}

export default LoginDetails