import React from "react";

// Creating a React component called MedicalTreatmentList with props as parameter.
function MedicalTreatmentList(props){ 


  const list = props.medicalJson;
// Using JSON parse to convert string into JavaScript object.
  const names = JSON.parse(list);
  const [num, setNum] = React.useState(names)
  const filterNames = e => {


  const search = e.target.value.toLowerCase()
  const filteredNames = names.filter(select => select.patientName.toLowerCase().includes(search))
  setNum(filteredNames)

  }

  return (

<div> 
<hr/>
<h2>Hospital Registry</h2>
<input placeholder = "Type Name..." onChange = {(e) => filterNames(e)} />
{/* Creating a map operator to list treatment records with patientId as key*/}
      <ul> 
      {num.map(list =>{
        return <li key={list.patientId}>{list.patientName} - {list.treatment}</li>
      })} 
      </ul> 
</div>

 );
}


export default MedicalTreatmentList;