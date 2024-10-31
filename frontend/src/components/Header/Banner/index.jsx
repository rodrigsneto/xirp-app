import './index.css'
import xirpicon from './../../../assets/xirpicon.png'
import Navbar from '../Navbar'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={xirpicon} alt="Banner"></img>
            <Navbar />
        </div>
    )
}

export default Banner