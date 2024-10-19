import "./Linkbox.css"
import { Link } from "react-router-dom"

const Linkbox = (props) => {
    return (
        <div className="linkbox-container">
            <div className="linkbox-picture">
                <img src={props.icon} />
            </div>
            <div className="linkbox-title">{props.title}</div>
            <button className="linkbox-button"><Link to='/products'>See More</Link></button>
        </div>
    )
}

export default Linkbox