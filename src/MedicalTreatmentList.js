import React from "react";

function MedicalTratmentList(){
 const records = [
{treatment: 'Dialysis', patientId: 123},
{treatment: 'chemotherapy', patientId: 712}
 ]

 return (
<div>
{records.map((data => {


<li key = {treatment}> </li>)

}

  </div>

  );
}








export default MedicalTratmentList;