import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deleteThisPlant}) {

  const renderPlants = plants.map (plant =>
    <PlantCard
      key={plant.id}
      plant={plant}
      deleteThisPlant={deleteThisPlant}
    />
    )

  return (
    <ul className="cards">{/* render PlantCards components in here */ renderPlants}</ul>
  );
}

export default PlantList;
