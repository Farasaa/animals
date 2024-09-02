import { useState } from "react"


export default function App(){

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of animals{count}</div>
        </div>
    )
}