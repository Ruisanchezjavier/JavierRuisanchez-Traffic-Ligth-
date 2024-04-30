import React, {useState} from "react";
import '../../styles/trafficLight.css'

const TrafficLight = () => {
    const [activeColor, setActiveColor] = useState("selected");
    
    return (
        <>
        <div className="stem"></div>
            <div className="traffic-light-body">
                <div className={
                    activeColor === "red" ? "red selected" : "red"
                }
                onClick={() => setActiveColor("red")}
                ></div>
                <div className={
                    activeColor === "yellow" ? "yellow selected" : "yellow"
                }
                onClick={() => setActiveColor("yellow")}></div>
                <div className={
                       activeColor === "green" ? "green selected" : "green"
                }
                onClick={() => setActiveColor("green")}
                ></div>
            </div>
        </>
    );
}

export default TrafficLight;