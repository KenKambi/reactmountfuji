
import MtFuji from "/src/assets/mountfuji.webp"

export default function Sites (props){

    console.log(props);

    return(
        <main>
            <section className="place">
                <div className="image-src">
                <img src={MtFuji} alt="Mount Fuji" />
                </div>
                <div className="details">
                    <span>{props.destination.location}</span>
                    <a href=""> View on Google Maps</a>
                    
                    <h1>Mount Fuji</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil eius commodi autem delectus. Corporis, vel impedit odit, nam voluptates dolore deserunt, porro aliquam atque beatae itaque culpa! Architecto, sequi.
                    </p>
                    <h4>
                        Best time to visit is ...
                    </h4>
                    <p>
                        top activitie to indulge in...
                    </p>
                    <p>
                        travel tips...
                    </p>
                </div>
            </section>
        </main>
    )
}