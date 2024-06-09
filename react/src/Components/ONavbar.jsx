import axios from "axios";
import {useState} from "react";

export function ONavbar({selectedOption, setSelectedOption}) {
    const [navOptions, setNavOptions] = useState(["Your opportunities", "View profile", "Create opportunity"]);
    
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