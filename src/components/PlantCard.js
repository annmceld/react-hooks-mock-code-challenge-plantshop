import React, {useState} from "react";

const baseUrl = 'http://localhost:6001/'
const plantsUrl = baseUrl + 'plants/'

function PlantCard({plant, deleteThisPlant}) {

  const {id, name, image, price} = plant

  const [ inStock, setInStock ] = useState(true)
  const [ formPrice, setFormPrice] = useState("")

  function changeFormPrice (event) {
    setFormPrice(event.target.value)
  }

  function submitNewPrice (event) {
    event.preventDefault()
    
    console.log(formPrice)
  }

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
      <form onSubmit={submitNewPrice}>
        <input type="number" placeholder="New Price" value={formPrice} onChange={changeFormPrice}/>
        <button type="submit">Update Price</button>
      </form>
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
