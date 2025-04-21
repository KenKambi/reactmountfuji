
import MtFuji from "/src/assets/mountfuji.webp"

export default function Sites (props){

    console.log(props);

    return(
        <main>
            <section className="place">
                <div className="image-src">
                <img src={props.destination.image} alt="Mount Fuji" />
                </div>
                <div className="details">
                    <span>{props.destination.location}</span>
                    <a href={props.destination.mapUrl} target="_blank"> View on Google Maps</a>
                    
                    <h1>{props.destination.name}</h1>
                    <p>
                        {props.destination.description}
                    </p>
                    <title></title>
                    <p>
                        <b>Best Time to Visit :</b>
                        {props.destination.bestTimeToVisit}
                    </p>
                    
                    <p>
                        <b>Top Activities include:</b> 
                        <i>   
                        {props.destination.topActivities}
                        </i>
                    </p>
                   
                    <p>
                        <b>Travel Tips:</b>
                        {props.destination.travelTip}
                    </p>
                </div>
            </section>
        </main>
    )
}