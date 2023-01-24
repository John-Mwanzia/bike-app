import React, { useEffect, useState } from "react";

function Input(){
    const [amount, setAmount] = useState(0);
    const [collectedAmount, setcollectedAmount] = useState(localStorage.getItem('collectedAmount') ? JSON.parse(localStorage.getItem('collectedAmount')) : []);
    const [addAmount, setaddAmount] = useState(0)

    useEffect(()=>{
      const data = localStorage.getItem('collectedAmount')
      const subTotal = localStorage.getItem('addAmount')
      setaddAmount(subTotal)
      console.log(data);

    }, []);

    useEffect(()=>{
      localStorage.setItem('collectedAmount', JSON.stringify(collectedAmount))
    }, [collectedAmount])

    function handleChange(event){
       setAmount(parseInt(event.target.value));   //    Input values are always sent to you as Strings, no matter the input type. When you use input type="number" it only helps the browser to present a number keypad.
                                                 //    You either have to cast the value to Int parseInt(myValue) before calling your action or inside the action itself.
    
    }

    function handleclick(event){
     
         setcollectedAmount(prevAmount=>{
          
            return[...prevAmount, amount]
           
         });
         
         alert("submitted successfully👍✔");
          event.preventDefault(); //prevent page refresh
      
    }

    function handleCollect(){
        // let total = 0;
        // collectedAmount.forEach(amountFound=>{
        //     return total += amountFound;
            
        // });

      const total = collectedAmount.reduce((a, c)=>{  //used reduce function instead of regular forEach method
        
            return a + c;
        }, 0);
        localStorage.setItem('addAmount', JSON.stringify(total))
        setaddAmount(total)
        
    }

    //at the end of the day reset total amount to zero before starting another day or else you can continue combining your totals
    function handleReset(){
      setcollectedAmount( collectedAmount.filter(item =>{  //return none of the items in the array
        return false;
       })  
       ) 
       setaddAmount(0);
       localStorage.removeItem("addAmount");
       
    }

    return(
        <div className="input-content">
        <form>
       
        <label>Enter amount Charged :  </label>
         <input onChange = {handleChange} type="number"  step={10} />
         <button onClick={handleclick} type="submit">submit</button>
          
        </form>
        <div className="get-total">
        <label>Total Earned:</label>
        <button onClick={handleCollect}>Get Total</button>
        </div>
        <div className="collected-Amount"> 
        <h1>Amount Collected :  </h1>
        <h1>Ksh.{addAmount}</h1>
        <button onClick={handleReset}>Reset Amount</button>
        </div>
      
        </div>
      
    )
}

export default Input;