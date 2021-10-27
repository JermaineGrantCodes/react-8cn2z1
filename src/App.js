import React from "react";
import "./style.css";


function App (prop){

  function toString(prop){
return "[" + "name = " + prop.name + ", id = "+ prop.id+ ",datePurchased = " + prop.datePurchased +"]";
  }
}
export default function App() {
  return (
    <div>
      {toString(prop)};
    </div>
  );
}
