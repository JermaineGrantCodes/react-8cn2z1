import React from "react";

function Product (prop) {

  function toString(){
    return "[ Id:" + prop.id + "Name: " + prop.name + "Date Purchased: " + prop.datePurchased + "]";
  }


return(
  <div>
    {toString()};
    </div>
   );
}

export default Product;
