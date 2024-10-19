import "./Intro.css"
import astrImg from "../../assets/Pictures/astronaut.png"
import { Link } from "react-router-dom"

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-container">
                <div className="left-side">
                    <div>Find The Best Products with Nexamart</div>
                    <Link to='/products'><button className="shop-now">Shop Now</button></Link>
                </div>
                <div className="right-side">
                    <img className="astr-img" src={astrImg} />
                </div>
            </div>
        </section>
    )
}

export default Intro