import React from "react";
import MedicalTreatment from "Medical Treatment";
import { useState } from "react";



function MedicalTratmentList(){ 
  
  const records = [
    {patientId: 1, patientName: 'Kelly Wood', treatment: 'Dialysis'},
    {patientId: 2, patientName: 'Craig Fitzgerald', treatment: 'Chemotherapy'},
    {patientId: 3, patientName: 'Sarah Parker', treatment: 'Physiotherapy'},
    {patientId: 4, patientName: 'Roger Adams', treatment: 'Blood Transfusion'},
    {patientId: 5, patientName: 'Ashley Roberts', treatment: 'Accupuncture'}
     ]
     
  
  const [names, setNames] = useState(records)
  
  const filterNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredNames = records.filter(names => names.patientName.toLowerCase().includes(search))
    setNames(filteredNames)

  }

  return (

<div> 
<hr/>
<h2>Hospital Registry</h2>
<input type = 'text' onChange = {(e) => filterNames(e)} />
<button>Search</button>
    <ul> 
      {names.map(name =>{
        return <li key={name.patientId}>{name.patientName} - {name.treatment}</li>
      })} 
      </ul> 
</div>

 );
}










export default MedicalTratmentList;