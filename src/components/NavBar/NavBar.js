import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import mainLogo from './main-logo.png'


const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'> <img src={mainLogo} alt="Good Morning!"></img></Link>
            <div>
                <Link to='/category/televisores' className="mi-enlace">SMART TV ·</Link>
                <Link to='/category/audio'className="mi-enlace"> SISTEMAS DE AUDIO ·</Link>
                <Link to='/category/camaras' className="mi-enlace"> CÁMARAS DIGITALES</Link>
            </div>
            <Link to='/Login' className="mi-enlace">Login</Link>
            <CartWidget />
        </nav>
    )
}

export default NavBar