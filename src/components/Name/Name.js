import React, { useEffect, useState } from "react";
import './Name.css';

const Name = () =>{
    const [dispName,setDispName] = useState();    
    return(
        <div className="main">
            <div className="av-content-input">
              <p>Your Name * </p>
              <input
                type="text"
                placeholder="Please Enter Your Name"
                value={dispName}
                onChange={(e) => {
                  setDispName(e.target.value);
                }}
              />

              <div className="name_display">
                  <p><b>{dispName}</b></p>
              </div>
            </div>
            
        </div>
    );
};

export default Name;