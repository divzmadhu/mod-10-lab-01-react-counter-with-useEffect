import { useState,useEffect } from "react";

//Creating the AdvancedCounter function
export default function AdvancedCounter() {

    // const [count, setCount] = useState<number>(0);

    const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? Number(savedCount) : 0;
});
    const [history, setHistory] = useState<number[]>([0]);

    const [step, setStep] = useState<number>(1);

    function handleIncrement() {
        setCount(count + step);
        setHistory([...history, count + step]);
    }

    function handleDecrement() {
        setCount(count - step);
        setHistory([...history, count - step]);
    }

    function handleReset() {
        setCount(0);
        setHistory([0]);
    }

    useEffect(( )=> {
        localStorage.setItem("count", count.toString());
    },[count]);



    return (
        <div className="advanced-counter">
            Counter
            <h2> Current Count : {count} </h2>
            <button className="decrement" onClick={handleDecrement}>Decrement</button>
            <button className="increment" onClick={handleIncrement}>Increment</button>

            <button className="reset" onClick={handleReset}>Reset</button>
            <div>

                <label>Step Value :</label>
                <input
                    type="number"
                    value={step}
                    onChange={(event) => setStep(Number(event.target.value))}
                />
            </div>

            <div className="count-history">
                <h3>Count History :</h3>
                <hr />
                {history.map((item, index) => (
                    <div key={index} className="history-item">
                        {item}

                    </div>
                ))}
            </div>

        </div >

    )


}