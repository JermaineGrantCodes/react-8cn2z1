// Importing values from exported module.
import React from "react";

// Creating a React component called MedicalTreatmentList with props passed as parameter.
function MedicalTreatmentList(props){ 

  const list = props.medicalJson;
// Using JSON parse to convert string into JavaScript object.
  const names = JSON.parse(list);
  const [num, setNum] = React.useState(names)
  const filterNames = e => {

  const search = e.target.value.toLowerCase()
  
// Creating a filter operator to return an array of names.
  const filteredNames = names.filter(select => select.patientName.toLowerCase().includes(search))
  setNum(filteredNames)

  }

  return (

<div> 
<hr/>
<h2>Hospital Registry</h2>
{/* Returning placeholder for when internal state of input changes and passing event into function filterNames.*/}
<input placeholder = "Type Name..." onChange = {(e) => filterNames(e)} />

{/* Creating and returning a map operator to list treatment records with patientId as the key.*/}
      <ul> 
      {num.map(list =>{
        return <li key={list.patientId}>{list.patientName} - {list.treatment}</li>
      })} 
      </ul> 
</div>

 );
}

// Exporting module for importing to component.
export default MedicalTreatmentList;