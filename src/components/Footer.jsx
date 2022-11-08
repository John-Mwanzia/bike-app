import React from "react";

function Footer(){
    const date = new Date()
    const currentYear= date.getFullYear();
    console.log(currentYear);
   return(
    <footer >
    <p>copyright ©  {currentYear}</p>
       <p>Created by john</p> 
       
    </footer>
   )
}
export default Footer;
