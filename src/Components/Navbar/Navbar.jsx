import "./Navbar.css"
import logo from "../../assets/Pictures/logo.png"
import cart from "../../assets/Pictures/shopping-bag.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <section id="nav-bar">
            <div className="logo">
                <Link to='/'><img className="logo-pic" src={logo} /></Link>
            </div>
            <ul className="links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="cart">
                <Link to='/cart'><img src={cart} /></Link>
                <div className="item-count">0</div>
            </div>
        </section>
    )
}

export default Navbar