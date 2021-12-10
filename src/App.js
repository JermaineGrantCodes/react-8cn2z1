// Importing values from exported module.
import React from "react";
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
// Using JSON stringify to convert array objects into string format.
  const recordsText = JSON.stringify(records);  

  return (
    
    <div>
  {/*Providing instances for each React component with arbitrary data*/}
   <MedicalTreatment treatId = "400" type = "Ultrasound" treatCourseId = "1212" category = "Radiography" name = "Susan Hill" startDate = {Date()}/>
   <MedicalTreatmentList medicalJson = {recordsText}/>
   <MedicalTreatmentPanel/>
  </div>

  );
}

// Exporting module for importing to component.
export default App;
