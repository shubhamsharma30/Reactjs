import React, {useState } from 'react';
import './App.css';
import Person from './person/person';

const App= props =>{

  const[personstate,setpersonstate]=useState({

  Persons:[
    {id:"1.", name:"shubham"},
    {id:"2." ,name:"sagar"},
    {id:"3.",name:"sachin"}
  ]
});

const clickHandler=() =>{
  setpersonstate({
    Persons:[
      {id:"1.", name:"Shubham"},
      {id:"2." ,name:"sourav"},
      {id:"4.",name:"Neymar"}
    ] 
  });
}

    return (
     
      <div className="App">
        <button onClick={clickHandler}>Click it</button>
        <Person
            id={personstate.Persons[0].id} 
            name={personstate.Persons[0].name}>
        </Person>
        <Person
             id={personstate.Persons[1].id}
             name={personstate.Persons[1].name}
             click={clickHandler}>
        </Person>
        <Person 
             id={personstate.Persons[2].id}
             name={personstate.Persons[2].name}>
        </Person>
         <h1>Devops stands for development and operations</h1>
      </div>
    );
  }  


export default App;
