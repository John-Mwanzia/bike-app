import React from "react";

function Input(){
    return(
        <div className="input-content">
        <form>
        <label>Enter amount Charged :  </label>
         <input className="" type="number"/>
         <button  type="submit">submit</button>
          <button>Get Total</button>
        </form>
          
        </div>
      
    )
}

export default Input;