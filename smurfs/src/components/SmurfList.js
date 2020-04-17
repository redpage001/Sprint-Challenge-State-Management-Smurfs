import React, { useContext } from "react";

import SmurfCard from "./SmurfCard";
import { SmurfContext } from "../context/SmurfContext";

const SmurfList = props => {
    const { smurfs, deleteSmurf } = useContext(SmurfContext);
    return(
        <div className="listContainer">
            <h1>Smurf Village</h1>
            <div className="cardsContainer">
                {smurfs && smurfs.map(smurf =>{
                    return <SmurfCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} deleteSmurf={deleteSmurf} />
                })}
            </div>
        </div>
    )
}

export default SmurfList;