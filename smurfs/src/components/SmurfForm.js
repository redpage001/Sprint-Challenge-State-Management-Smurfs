import React, { useContext, useState } from "react";
import axios from "axios";

import { SmurfContext } from "../context/SmurfContext";

const SmurfForm = props => {
    const { addSmurf } = useContext(SmurfContext);

    const [ newSmurf, setNewSmurf ] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    });

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
            id: Date.now()
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(newSmurf);
        axios.post(`http://localhost:3333/smurfs/`, newSmurf)
        setNewSmurf({
            name: "",
            age: "",
            height: "",
            id: ""
        })
    }

    return(
        <div className="formContainer">
            <form>
                <h1>New Smurf</h1>
                <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={newSmurf.name}
                    onChange={handleChange}
                />

                <br />

                <input 
                    name="age"
                    type="text"
                    placeholder="Age"
                    value={newSmurf.age}
                    onChange={handleChange}
                />

                <br />

                <input 
                    name="height"
                    type="text"
                    placeholder="Height"
                    value={newSmurf.height}
                    onChange={handleChange}
                />

                <br />

                <button className="submitButton" type="submit" onClick={handleSubmit}>Create New Smurf</button>

            </form>
        </div>
    )
}

export default SmurfForm;