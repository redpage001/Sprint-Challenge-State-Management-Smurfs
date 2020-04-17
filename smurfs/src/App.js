import React, { useState, useEffect } from "react";
import axios from "axios";

import { SmurfContext } from "./context/SmurfContext";
import SmurfList from "./components/SmurfList";
import SmurfForm from "./components/SmurfForm";
import "./App.css";

function App() {

  const [smurfs, setSmurfs] = useState([]);

  const addSmurf = smurf => {
    setSmurfs([
      ...smurfs,
      smurf
    ])
  }

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
         .then(response =>{
           console.log({response})
           setSmurfs(response.data)
         })
         .catch(err =>{
           console.log({err})
         })
  }, [])

  const deleteSmurf = smurf => {
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
         .then(response =>{
           setSmurfs(response.data)
         })
  }

  return (
    <SmurfContext.Provider value = {{ smurfs, addSmurf, deleteSmurf }}>
      <SmurfList />
      <SmurfForm />
    </SmurfContext.Provider>
  )
}

export default App;