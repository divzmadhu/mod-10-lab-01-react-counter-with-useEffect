import { useState, useEffect } from "react";

//Creating the AdvancedCounter function
export default function AdvancedCounter() {

    const [count, setCount] = useState<number>(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div className="advanced-counter">
            Counter
            <h2> Current Count : {count} </h2>
            <button className = "decrement" onClick = {handleDecrement}>Decrement</button>
            <button className = "increment" onClick = {handleIncrement}>Increment</button>
          

           
        </div>
    )


}