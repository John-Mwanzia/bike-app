import React, { useState } from "react";

function Input(){
    const [amount, setAmount] = useState();
    const [collectedAmount, setcollectedAmount] = useState([]);
    const [addAmount, setaddAmount] = useState()

    function handleChange(event){
       setAmount(parseInt(event.target.value));
    
    }

    function handleclick(event){
         setcollectedAmount(prevAmount=>{
            return[...prevAmount, amount]
           
         });
        
     event.preventDefault();
    }

    function hanldeCollect(){
        let total = 0;
        // setaddAmount(collectedAmount)
        collectedAmount.forEach(amountFound=>{
            return total += amountFound;
            
        });
        setaddAmount(total)
        console.log(total);
    }

    return(
        <div className="input-content">
        <form>
       
        <label>Enter amount Charged :  </label>
         <input onChange = {handleChange} type="number" />
         <button onClick={handleclick}>submit</button>
          
        </form>
        <label>Total Earned:</label>
        <button onClick={hanldeCollect}>Get Total</button>

        <div className="collected-Amount"> 
        <h1>Amount Collected </h1>
        <h1>{addAmount}</h1>
        </div>
      
        </div>
      
    )
}

export default Input;