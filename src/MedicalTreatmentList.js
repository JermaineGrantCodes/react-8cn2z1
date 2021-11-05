import React from "react";
import MedicalTreatment from "Medical Treatment";

const records = [
  {treatment: 'Dialysis', patientId: 123, patientName: 'Kelly Wood'},
  {treatment: 'Chemotherapy', patientId: 712, patientName: 'Craig Fitzgerald'},
  {treatment: 'Physiotherapy', patientId: 242, patientName: 'Sarah Parker'},
  {treatment: 'Blood Transfusion', patientId: 192, patientName: 'Roger Adams'},
  {treatment: 'Accupuncture', patientId: 452, patientName: 'Ashley Roberts'}
   ];

const listTreatment = records.map(person => 
    <li key = {person.patientId}>{person.treatment} - {person.patientName}</li>)

const filteredOption = records.filter(name => name.length > 3);
//const records = props.records;


function MedicalTratmentList(){ 
  return (

<div>

    <ul> {listTreatment} </ul> 
   
</div>

 )
}










export default MedicalTratmentList;