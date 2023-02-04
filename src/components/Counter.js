import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    
    return (
        <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </div>
    );
    }

export default Counter;
