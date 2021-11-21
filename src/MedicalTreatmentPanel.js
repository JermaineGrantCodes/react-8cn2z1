// Importing values from exported module.
import React from "react";

// Creating a React component called MedicalTreatmentList.
function MedicalTreatmentPanel(){
  
// Using React Hooks expression useState with the parameter and setter method to empty string.
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');

// Function to display data binded text in a pop-up window.
  function eventHandler () {
      window.alert("[" + "Treatment ID = " + treatId + ", Treatment Course ID = " + treatCourseId+ ", Type = " + type + ", Category = " + category + ", Name = " + name + ", Start Date = " + startDate + "]");
  }
  
// Function to clear and restore text fields to default state using setter methods.
  function clearEventHandler () {
    setTreatId('');
    setTreatCourseId('');
    setType('');
    setCategory('');
    setName('');
    setStartDate('');
  }

return (

  <div>
<hr/>
<h2>Treatment Booking</h2>
{/* Returning placeholders that will bind values according to change of input state from event.*/}
<input placeholder= "Treatment ID" value = {treatId} onChange = {e => setTreatId(e.target.value)}></input>
<br/>
<input placeholder= "Treatment Course ID" value = {treatCourseId} onChange = {e => setTreatCourseId(e.target.value)}></input> 
<br/>
<input placeholder= "Type" value = {type} onChange = {e => setType (e.target.value)}></input>
<br/>
<input placeholder= "Category" value = {category} onChange = {e => setCategory (e.target.value)}></input>
<br/>
<input placeholder= "Full Name" value = {name} onChange = {e => setName (e.target.value)}></input>
<br/>
<input placeholder= "Start Date" value = {startDate} onChange = {e => setStartDate (e.target.value)} ></input>
<br/>
{/* Creating buttons to bind and display data entered, or clear input fields on click.*/}
<button style={{color:"green"}} onClick={eventHandler}>Display</button>
<button style={{color:"red"}} onClick={clearEventHandler}>Clear</button>
  </div>
 
 );
}

// Exporting module for importing to component.
export default MedicalTreatmentPanel;