import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/" className='Menu'>HOME</Link>
      </div>
      <div>
        <Link to="/login" className='Menu'>LOGIN</Link>
      </div>
      <div>
        <Link to="/empresas" className='Menu'>EMPRESAS</Link>
      </div>
    </nav>
  )
}

export default Navbar