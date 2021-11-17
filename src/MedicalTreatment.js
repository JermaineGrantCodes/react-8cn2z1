import React from "react";

// Creating a React component called MedicalTreatment
function MedicalTreatment (props){
   
  return (
    
    <div> 
<h3> Treatment ID: {props.treatId}</h3>
<h3> Treatment Course ID: {props.treatCourseId}</h3>
<h3> Type: {props.type}</h3>
<h3> Category: {props.category}</h3>
<h3> Patient Name: {props.name}</h3>
<h3> Start Date: {props.startDate}</h3>

    </div>
  );

}

export default MedicalTreatment;