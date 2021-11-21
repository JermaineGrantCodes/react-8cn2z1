// Importing values from exported module.
import React from "react";

// Creating a React component called MedicalTreatment with props passed as parameter.
function MedicalTreatment (props){

  return (
    
    <div> 
{/* Using props within the function to be returned to main component (App) along with titles for each category.*/}
<h3> Treatment ID: {props.treatId}</h3>
<h3> Treatment Course ID: {props.treatCourseId}</h3>
<h3> Type: {props.type}</h3>
<h3> Category: {props.category}</h3>
<h3> Patient Name: {props.name}</h3>
<h3> Start Date: {props.startDate}</h3>
    </div>
  );

}
// Exporting module for importing to component.
export default MedicalTreatment;