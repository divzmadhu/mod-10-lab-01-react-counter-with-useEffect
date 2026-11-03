import { useState, useEffect } from "react";

//Creating the AdvancedCounter function
export default function AdvancedCounter() {

    const [count, setCount] = useState<number>(0);

    const [history, setHistory] = useState<number[]>([]);

    const [step, setStep] = useState<number>(1)

    function handleIncrement() {
        setCount(count + step);
    }

    function handleDecrement() {
        setCount(count - step);
    }

    function handleReset() {
        setCount(0)
    }

    function handleSubmit() {
        setStep(1)
    }

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

        </div>

    )


}