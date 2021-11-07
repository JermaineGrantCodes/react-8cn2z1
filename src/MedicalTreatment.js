import React from "react";

// Adding properties to component MedicalTreatment
function MedicalTreatment (props){
   return (
    <div> 
<h2> Treatment ID: {props.treatId}</h2>
<h2> Treatment Course ID: {props.treatCourseId}</h2>
<h2> Type: {props.type}</h2>
<h2> Category: {props.category}</h2>
<h2> Patient Name: {props.name}</h2>
<h2> Start Date: {props.startDate}</h2>

    </div>
  );

}

export default MedicalTreatment;