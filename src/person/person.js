import React from 'react';

const person = (props) => {
return(
    <div>
    <h3 Click={props.click}>{props.id} is {props.name}</h3>
    <h3>{props.children}</h3>
    </div>
 )
}

export default person;