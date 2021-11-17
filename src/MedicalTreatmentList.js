import React from "react";

// Creating a React component called MedicalTreatmentList
function MedicalTreatmentList(props){ 



  const list = props.medicalJson;
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
<ul> 
      {num.map(list =>{
        return <li key={list.patientId}>{list.patientName} - {list.treatment}</li>
      })} 
      </ul> 

</div>

 );
}


export default MedicalTreatmentList;