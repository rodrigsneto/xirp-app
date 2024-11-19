import { useState } from 'react'
import './index.css'
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/login', {email, senha})
    .then(res => console.log(res))
    // .then(res => setError('Email ou senha inválidos '))
    .catch( err =>
      // err => console.log(err)
      setError('Email ou senha inválidos ' + err)
    )
  }
  
  {console.log(error)}

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} />
        </div>
        <button>Login</button>
        <div>
          {error}
        </div>
      </form>
    </div>
  )
}

export default LoginPage