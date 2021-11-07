import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentList from "./MedicalTreatmentList";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";


  
export default function App() {
  return (
    <div>
   <MedicalTreatment treatId = "400" type = "Ultrasound" treatCourseId = "1212" category = "Radiography" name = "Susan Hill" startDate = {Date()}/>
   <MedicalTreatmentList/>
   <MedicalTreatmentPanel/>
  </div>

  );
}



//<input placeholder="Product ID" value={productId} onChange = {e => setProductID(e.target.value)} ></input>