import React from 'react';




function Filter  (props) {
       

        return (
        <div className = "Buttons">
     <div id ="buttons-cont" className="btn-group btn-group-toggle" data-toggle="buttons" role="group" aria-label="Basic example">
 <button className = "btn btn-outline-info active" onClick = {props.filterTasks}>All</button>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Monday"/>Monday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Tuesday"/>Tuesday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Wednesday"/>Wednesday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Thursday"/>Thursday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Friday"/>Friday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Saturday"/>Saturday</label>
 <label className="btn btn-outline-info"><input type="radio" onClick = {props.filterTasks} value= "Sunday"/>Sunday</label>


</div>

        </div>
        );
        }
        
    
export default Filter; 



