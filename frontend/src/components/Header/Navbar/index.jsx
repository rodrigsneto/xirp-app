import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/" className='Menu'>Home</Link>
      </div>
      <div>
        <Link to="/login" className='Menu'>Login</Link>
      </div>
      <div>
        <Link to="/empresas" className='Menu'>Empresas</Link>
      </div>
      <div>
        <Link to="/equipamentos" className='Menu'>Equipamentos</Link>
      </div>
      <div>
        <Link to="/plantoes" className='Menu'>Plantoes</Link>
      </div>
    </nav>
  )
}

export default Navbar