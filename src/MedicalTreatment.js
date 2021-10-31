
import React from "react";

function MedicalTreatment (){
//React Hooks:

const [productName, setProductName] = React.useState();
const clearInterval = (event) =>{
  setProductName("");
}

function onChangeHandler(event){
let someValue = event.target.value;
setProductName(someValue);

}

return (
  <div>
<input placeholder="text field" value={productName} onChange = {onChangeHandler} />
<button onClick = {event => clearInterval()}>
  Clear
  </button>

<br/>
{productName}


  </div>
);

}

export default MedicalTreatment;