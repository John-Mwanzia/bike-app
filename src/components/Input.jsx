import React, { useState } from "react";

function Input(){
    const [amount, setAmount] = useState();
    const [collectedAmount, setcollectedAmount] = useState([]);
    const [addAmount, setaddAmount] = useState()

    function handleChange(event){
       setAmount(parseInt(event.target.value));   //    Input values are always sent to you as Strings, no matter the input type. When you use input type="number" it only helps the browser to present a number keypad.
                                                 //    You either have to cast the value to Int parseInt(myValue) before calling your action or inside the action itself.
    
    }

    function handleclick(event){
         setcollectedAmount(prevAmount=>{
            return[...prevAmount, amount]
           
         });
         alert("submitted successfully👍✔");
        
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

    function handleReset(){
        setaddAmount(0)    //at the end of the day reset total amount to zero before starting another day or else you can continue combining your t
    }

    return(
        <div className="input-content">
        <form>
       
        <label>Enter amount Charged :  </label>
         <input onChange = {handleChange} type="number" step={10} />
         <button onClick={handleclick}>submit</button>
          
        </form>
        <label>Total Earned:</label>
        <button onClick={hanldeCollect}>Get Total</button>

        <div className="collected-Amount"> 
        <h1>Amount Collected :  </h1>
        <h1>Ksh.{addAmount}</h1>
        <button onClick={handleReset}>Reset Amount</button>
        </div>
      
        </div>
      
    )
}

export default Input;