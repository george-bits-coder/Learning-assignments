import { useState } from "react"

function Counter({starting}) {

    const [count, setCount] = useState(starting);

    const changeit = (value) => {
        setCount(count + value);
    }

    const double = () => {
        setCount(count * 2);
    }

    return <div>
        <h1>Counter: {count} </h1>
        <button onClick={() => changeitt(1)}>Increment</button>
        <button onClick={() => changitt(-1)}>Decrement</button>
        <button onClick={double}>Double</button>
     
    </div>
}

export default Counter;
