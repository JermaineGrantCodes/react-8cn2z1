import React from "react";
import "./style.css";
import Product from "./Product";
import MedicalTreatment from "./MedicalTreatment";


  
export default function App() {
  return (
    <div>
   <Product name = "Apple" id="item1" datePurchased = {Date()} ></Product>
   <MedicalTreatment treatId = "400" type = "Radiography"/>
  </div>

  );
}



//<input placeholder="Product ID" value={productId} onChange = {e => setProductID(e.target.value)} ></input>