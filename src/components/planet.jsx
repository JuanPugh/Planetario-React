export default function Planet(props) {

    var displayPlanet = props.name.charAt(0).toUpperCase() + props.name.slice(1);


    return (
        <div className={`styles.planet ${props.name} `} OnMouseOver="showinfo(this)">
            <div className="info">
                <h2>{displayPlanet}</h2>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
};