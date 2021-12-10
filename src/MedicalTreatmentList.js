// Importing values from exported module.
import React from "react";
// Creating a React component called MedicalTreatmentList with props passed as parameter.
function MedicalTreatmentList(props){ 
// Creating a constant variable called list with records passed as props.
  const list = props.medicalJson;
// Using JSON parse to convert string into JavaScript object.
  const names = JSON.parse(list);
// Using React Hooks expression useState with the parameter and setter method to names.
  const [num, setNum] = React.useState(names)
// Creating function called filterNames to access event being passed.
  const filterNames = e => {
// Creating a constant variable called search to store the event(argument), target of individual input and value of user input.
  const search = e.target.value.toLowerCase() 
// Creating a filter operator to return an array of patient names in lowercase with search as the parameter. Lowercase values are set inorder to match the input when compared.
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