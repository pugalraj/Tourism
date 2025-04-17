import { useNavigate } from "react-router-dom";
import React from "react";
import "./Grid.css";

function Grid(){
    const navigate = useNavigate(); // Initialize navigate

    return(
        <div className="gtop1">

        {/* //   const navigate = useNavigate(); // Initialize navigate */}

        <h1>Select the place you want to explore...</h1>
        <div className="btn">
        
            <button className="btn1"  onClick={() => navigate("/form")}>
                <div className="pn">
                <h4>United kingdom</h4>
                </div>
            </button>
            <button className="btn2" onClick={() => navigate("/form")}>
                <div className="pn2">
                   <h4>Japan </h4>
                </div>
            </button>
            <button className="btn3" onClick={() => navigate("/form")}>
                <div className="pn3">
                    <h4>India</h4>
                </div>
            </button>
            <button className="btn4" onClick={() => navigate("/form")}>
                <div className="pn4">
                   <h4>Srilanka</h4> 
                </div>
            </button><br/>
            <button className="btn5" onClick={() => navigate("/form")}>
                <div className="pn5">
                   <h4>Russia</h4>
                </div>
            </button>
            <button className="btn6" onClick={() => navigate("/form")}>
                <div className="pn6">
                    <h4>China</h4>
                </div>
            </button>
            <button className="btn7" onClick={() => navigate("/form")}>
                <div className="pn7">
                    <h4>Antarctica</h4>
                </div>
            </button>
            <button className="btn8" onClick={() => navigate("/form")}>
                <div className="pn8">
                    <h4>Africa</h4>
                </div>
            </button>
            <button className="btn9" onClick={() => navigate("/form")}>
                <div className="pn9">
                    <h4>Australia</h4>
                </div>
            </button>



        </div>
        </div>
    )
}



export default Grid;