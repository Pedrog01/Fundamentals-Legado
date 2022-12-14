// state
import React,{ useState } from "react";
 
export default props => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count -1)}>Dec</button>
            <button onClick={() => setCount(count + 10)}>Inc10</button>
            <button onClick={() => setCount(count - 10)}>Dec10</button>
        </div>
    )
}