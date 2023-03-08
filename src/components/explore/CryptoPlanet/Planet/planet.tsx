import React from "react";
import './planet.scss'

const Planet = () => {
    return (
        <div className="planet">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" cx="50" cy="50" r="40" fill="transparent"
                stroke="#E75626"
                strokeWidth="0.5"
                strokeDasharray="251.2"
                strokeDashoffset="251.2">
                    <animate attributeName="stroke-dashoffset"
                        dur="2s"
                        repeatCount="indefinite"
                        from="251.2"
                        to="0"
                        fill="freeze"
                    />
                </circle>
            </svg>
        </div>
    )
}

export default Planet;