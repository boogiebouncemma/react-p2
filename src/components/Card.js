
import pointerImg from "../img/pointer.png"


export default function Card(props) {

    return (
        <div className="card--bigcontainer">
            <div className="card--container">
                <img src={props.item.imageUrl} className="card--img"/>
                <div className="card--textbox">
                    <div className="card--firstLine">
                        <img src={pointerImg} className="card--pointer" />
                        <span className="card--country">
                            {props.item.location}
                        </span>
                        <a href={props.item.googleMapsUrl} className="card--link">
                            View on Google Maps
                        </a>
                    </div>
                    <h2>{props.item.title}</h2>
                    <p className="card--dates">
                        {props.item.startDate} - {props.item.endDate}
                    </p>
                    <p >
                        {props.item.description}
                    </p>
                    
                </div>

            </div>
            <hr />
        </div>
    )
}


