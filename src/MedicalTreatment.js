
import React from "react";

function MedicalTreatment (props){
//React Hooks:


return (
 <div> 
<h1> Treatment ID: {props.treatId}</h1>
<h1> Treatment Course ID: {props.treatCourseId}</h1>
<h1> Type: {props.type}</h1>
<h1> Category: {props.category}</h1>
<h1> Name: {props.name}</h1>
<h1> Start Date: {props.startDate}</h1>
</div>
);

}

export default MedicalTreatment;