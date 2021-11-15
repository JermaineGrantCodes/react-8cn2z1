import React from "react";
// Creating a React component called MedicalTreatmentList
function MedicalTratmentList(){ 
// Creating a constant variable of an array list to be filtered and mapped.
  const records = [
    {patientId: 1, patientName: 'Kelly Wood', treatment: 'Dialysis'},
    {patientId: 2, patientName: 'Craig Fitzgerald', treatment: 'Chemotherapy'},
    {patientId: 3, patientName: 'Marlene Grant', treatment: 'Physiotherapy'},
    {patientId: 4, patientName: 'Roger Adams', treatment: 'Blood Transfusion'},
    {patientId: 5, patientName: 'Ashley Roberts', treatment: 'Accupuncture'}
     ]
     
  const [names, setNames] = React.useState(records)
  const filterNames = e => {

    const search = e.target.value.toLowerCase()
    const filteredNames = records.filter(names => names.patientName.toLowerCase().includes(search))
    setNames(filteredNames)

  }

  return (

<div> 
<hr/>
<h2>Hospital Registry</h2>
<input placeholder = "Type Name..." onChange = {(e) => filterNames(e)} />
    <ul> 
      {names.map(name =>{
        return <li key={name.patientId}>{name.patientName} - {name.treatment}</li>
      })} 
      </ul> 
</div>

 );
}


export default MedicalTratmentList;