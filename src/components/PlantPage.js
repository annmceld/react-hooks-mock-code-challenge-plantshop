import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = 'http://localhost:6001/'
const plantsUrl = baseUrl + 'plants/'

function PlantPage() {

  const [ plants, setPlants] = useState ([])
  const [ filterPlants, setFilterPlants] = useState ("")

  useEffect(fetchPlants, [])

  function fetchPlants () {
    fetch (plantsUrl)
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }

  function addNewPlant (newPlant) {
    setPlants([...plants, newPlant])
  }

  function filterSelectedPlants (event) {
    setFilterPlants(event.target.value)
  }

  const plantResults = plants.filter (plant => {
    return plant.name.toLowerCase().includes(filterPlants.toLowerCase())
  })

  function deleteThisPlant (deletedPlant) {
    const updatedPlants = plants.filter(plant =>
      plant.id !== deletedPlant.id)

      setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search filterSelectedPlants={filterSelectedPlants}/>
      <PlantList plants={plantResults} deleteThisPlant={deleteThisPlant}/>
    </main>
  );
}

export default PlantPage;
