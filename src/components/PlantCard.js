import React, {useState} from "react";

const baseUrl = 'http://localhost:6001/'
const plantsUrl = baseUrl + 'plants/'

function PlantCard({plant, deleteThisPlant}) {

  const {id, name, image, price} = plant

  const [ inStock, setInStock ] = useState(true)

  function toggleInStock () {
    setInStock(!inStock)
  }

  function clickDeletePlantButton () {
    fetch (plantsUrl + id, {method: "DELETE"})
    .then (deleteThisPlant(plant))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock} >In Stock</button>
      ) : (
        <button onClick={toggleInStock} >Out of Stock</button>
      )}
      <div>      
        <button className="primary" onClick={clickDeletePlantButton}>Delete This Plant!</button>
      </div>
    </li>
  );
}

export default PlantCard;
