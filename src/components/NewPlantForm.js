import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState("")

  function changePlantName (event) {
    setPlantName(event.target.value)
  }

  function changePlantImage (event) {
    setPlantImage(event.target.value)
  }

  function changePlantPrice (event) {
    setPlantPrice(event.target.value)
  }

  function plantFormSubmit (event) {
    event.preventDefault()

    const newPlant = {
      name: plantName,
      image: plantImage,
      price: plantPrice
    }

    addNewPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={plantFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={changePlantName}/>
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={changePlantImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={changePlantPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
