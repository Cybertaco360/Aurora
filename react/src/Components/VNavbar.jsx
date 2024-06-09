import axios from "axios";
import {useState} from "react";

export function VNavbar({selectedOption, setSelectedOption}) {
    const [navOptions, setNavOptions] = useState(["Find opportunities", "View profile"]);
    
    return (
        <div className="options">
            {navOptions.map(function(option) {
                return (
                    <button 
                    className={selectedOption === option ? "selected option" : "option"} 
                    key={option} 
                    onClick={
                        () => {setSelectedOption(option)}
                    }
                    >
                        {option}
                    </button>
                )

            })}
        </div>
    )
    
}