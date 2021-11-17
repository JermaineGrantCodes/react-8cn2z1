import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentList from "./MedicalTreatmentList";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";


  
function App() {

// Creating a constant variable of an array list to be filtered and mapped.
  const records = [
    {patientId: 1, patientName: 'Kelly Wood', treatment: 'Dialysis'},
    {patientId: 2, patientName: 'Craig Fitzgerald', treatment: 'Chemotherapy'},
    {patientId: 3, patientName: 'Marlene Grant', treatment: 'Physiotherapy'},
    {patientId: 4, patientName: 'Roger Adams', treatment: 'Blood Transfusion'},
    {patientId: 5, patientName: 'Ashley Roberts', treatment: 'Accupuncture'}
     ];
  
  const recordsText = JSON.stringify(records);  

// Providing instances for each React component with arbitrary data
  return (
    
    <div>
   <MedicalTreatment treatId = "400" type = "Ultrasound" treatCourseId = "1212" category = "Radiography" name = "Susan Hill" startDate = {Date()}/>
   <MedicalTreatmentList medicalJson = {recordsText}/>
   <MedicalTreatmentPanel/>
  </div>

  );
}

export default App;
