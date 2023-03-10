import React from "react";
import './planet.scss'

const Planet:React.FC = () => {
    return (
        <div className="planet">
            <div className="planet__l1">
                <div className="planet-anim">
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
                <div className="planet__l2">
                    <div className="planet__l2__stroke1">
                        <div className="planet__l2__stroke2">
                            <div className="planet__l2__lay">
                                <div className="q-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Planet;