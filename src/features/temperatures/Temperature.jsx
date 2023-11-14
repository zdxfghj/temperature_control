import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement, temperatureCount } from "./temperatureSlice";
import "./Temperature.css"

export function Temperature () {

    const temperature = useSelector(temperatureCount);
    const [color, setColor] = useState("blue")
    const dispatch = useDispatch();

    
    
    return(
        <div className="wrapper">
            <div className="card">
                <div className="row row1">
                    <div className="circle_of_temperature"  style={{ backgroundColor: temperature>=19 ? "rgb(235, 74, 53)" :  (temperature<=15 ? "rgb(150, 223, 233)": 'rgb(235, 141, 53)') }}>
                        {temperature}
                    </div>
                </div>
                <div className="row row2">
                    <button className="button" onClick={()=>dispatch(increment())}>+</button>
                    <button className="button" onClick={()=>dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>
    );
}