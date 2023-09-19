import React, {useState} from "react";
import './style.css';
import data from "./devices.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                    <img src={val.images} alt="" />
                    <h3>{val.title}</h3>
                    <p>Description: {val.description}</p>
                    <p className="price">${val.price}</p>
                    <p>DiscountPercentage: {val.discountPercentage}</p>
                    <p>Rating: {val.rating}</p>
                    <p>Stock: {val.stock}</p>
                    <p>Brand: {val.brand}</p>
                    <p>Category: {val.category}</p>
                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;
