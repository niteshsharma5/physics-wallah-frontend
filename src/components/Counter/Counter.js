import React, { useEffect, useState } from "react";
import './Counter.css';

const Counter = () =>{
    const [count,setCount]  = useState(0);
    const incCount = ()=>{
        setCount(count+1);
    }
    const decCount = ()=>{
        if(count!==0)
        setCount(count-1);
    }
    return(
        <div className="main">
            <div className="inner_div">
            <p onClick={incCount}>Increment</p>
            </div>
            <div><p>{count}</p></div>
            <div className="inner_div">
            <p onClick={decCount}>Decrement</p>
            </div>
        </div>
    );
};

export default Counter;