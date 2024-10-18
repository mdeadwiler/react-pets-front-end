import { useState, useEffect } from "react";
import { getPets } from "./services/petServices.js";
import "./App.css";

const App = () => {
  const [pets, setPets] = useState([]);
  //const [petList, setPetList] = useState([]);
  
  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []); //start with an [] but you probably will never use it
  return (
    <>
    <h1>Hello</h1>
    </>
  )
};

export default App;
