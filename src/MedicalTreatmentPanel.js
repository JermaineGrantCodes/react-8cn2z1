import React from "react";

function MedicalTreatmentPanel(){
  
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
// Function to display data binded text in pop-up window
  function eventHandler () {
      window.alert("[" + "Treatment ID = " + treatId + ", Treatment Course ID = " + treatCourseId+ ", Type = " + type + ", Category = " + category + ", Name = " + name + ", Start Date = " + startDate + "]");

  }
// Function to clear and restore text fields to default state
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
<input placeholder= "Treatment ID" value = {treatId} onChange = {e => setTreatId(e.target.value)}></input>
<br/>
<input placeholder= "Treatment Course ID" value = {treatCourseId} onChange = {e => setTreatCourseId(e.target.value)}></input> 
<br/>
<input placeholder= "Type" value = {type} onChange = {e => setType (e.target.value)}></input>
<br/>
<input placeholder= "Category" value = {category} onChange = {e => setCategory (e.target.value)}></input>
<br/>
<input placeholder= "Name" value = {name} onChange = {e => setName (e.target.value)}></input>
<br/>
<input placeholder= "Start Date 07/10/22" value = {startDate} onChange = {e => setStartDate (e.target.value)} ></input>
<br/>
<button style={{color:"green"}} onClick={eventHandler}>Display</button>
<button style={{color:"red"}} onClick={clearEventHandler}>Clear</button>
  </div>
 

 );
}

export default MedicalTreatmentPanel;