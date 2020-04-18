import React from "react";

const SmurfCard = props => {
    return(
        <div className="cardContainer">
            {props.name && <h2>{props.name}</h2>}
            {props.age && <h3>Age: {props.age}</h3>}
            {props.height && <h3>Height: {props.height}</h3>}
        </div>
    )
}

export default SmurfCard;