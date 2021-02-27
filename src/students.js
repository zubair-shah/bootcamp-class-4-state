import React from 'react';

function Students (props) {
    return(
        <div>
          <i> <h3>Name of student : <strong> {props.Name}</strong></h3> </i>
           <h3>the value is Increase by : {props.counter}</h3>
        </div>
    )
  
}

export default Students ;