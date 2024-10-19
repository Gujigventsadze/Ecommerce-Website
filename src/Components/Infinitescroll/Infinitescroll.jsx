import "./Infinitescroll.css"
import logo1 from "../../assets/Pictures/icons/apple.png"
import logo2 from "../../assets/Pictures/icons/facebook.png"
import logo3 from "../../assets/Pictures/icons/instagram.png"
import logo4 from "../../assets/Pictures/icons/search.png"
import logo5 from "../../assets/Pictures/icons/telegram.png"
import logo6 from "../../assets/Pictures/icons/tiktok.png"
import logo7 from "../../assets/Pictures/icons/twitter.png"
import logo8 from "../../assets/Pictures/icons/whatsapp.png"
import logo9 from "../../assets/Pictures/icons/youtube.png"


const Infinitescroll = () => {
    return (
        <section id="companies">
            <h1>Trusted By Top Companies</h1>
            <div className="logos">
                <div className="logos-slide">
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    <img src={logo5} />
                    <img src={logo6} />
                    <img src={logo9} />
                    <img src={logo7} />
                    <img src={logo8} />
                </div>
                <div className="logos-slide">
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    <img src={logo5} />
                    <img src={logo6} />
                    <img src={logo9} />
                    <img src={logo7} />
                    <img src={logo8} />
                </div>
            </div>
        </section>
    )
}

export default Infinitescroll