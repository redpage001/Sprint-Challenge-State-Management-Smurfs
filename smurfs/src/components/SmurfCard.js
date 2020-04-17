import React from "react";

const SmurfCard = props => {
    return(
        <div className="cardContainer">
            {props.name && <h2>{props.name}</h2>}
            {props.age && <h3>{props.age}</h3>}
            {props.height && <h3>{props.height}</h3>}
            {props && <button onClick={() => props.deleteSmurf}>Got Eaten</button>}
        </div>
    )
}

export default SmurfCard;