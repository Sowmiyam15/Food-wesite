import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function handleClick() {
         setCounter(counter + 1); // Correct way to update the state
       
        
        // setCounter(PrevState+1); // counter aacces paannama previous state kooda acces paannikiralam
    }
    
    const handleClic = () =>{
        setCounter(counter-1);

    }

    return (
        <>
            <h1>{counter}</h1> {/* Update to display current counter value */}
            <button onClick={handleClick}>increase</button>
            <button onClick={handleClic}>increase</button>
            {/* <button onClick={()=>setCounter(counter-1)}>decrease</button> */}
            <button onClick={()=>setCounter(0)}>reset</button>
        </>
    );
}

export default Counter;
