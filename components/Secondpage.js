import React from "react";
import { useNavigate } from "react-router-dom";
import "./Secondpage.css";
import { useState,useEffect } from "react";


const Secondpage = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [showssage, setShowssage] = useState(false);
    const [showsosage, SetShowsosage] = useState(false);




    useEffect(() => {
        const timer = setTimeout(() => {
          setShowMessage(true);
        }, 2000); // 2 seconds delay

        const timers = setTimeout(() => {
            setShowssage(true);
          }, 5000); // 5 seconds delay

          const timerz = setTimeout(() => {
            SetShowsosage(true);
          }, 7000); // 7 seconds delay
      
    
        return () => clearTimeout(timer); // Cleanup on unmount
      }, []);

      

  return (
      <div className="first">
        
        <h1> Welcome to the Pugal Tourism</h1>
  
        {showMessage && (
        <h1>
          Hurry up guys Limited booking slots
        </h1>
      )}

{showssage && (
        <h2>
    Coupon Code Available lets Explore with Pugal Tourism 
        </h2>
      )}

{showsosage && (
        <h2>
          Click the <i class="fa-solid fa-arrow-pointer"></i> Explore button right now...for 50% OFFER!
        </h2>
      )}

        <div className="but">
        <button onClick={() => navigate("/grid")}> Explore  </button>
        <button>  View  </button>
        
        </div>
        
      </div>
    
  );
};

export default Secondpage;
