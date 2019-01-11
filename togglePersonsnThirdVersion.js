import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: "Ewa", age: "32"},
            { name: "Aga", age: "25"},
            { name: "Batu", age: "55"},
            { name: "Miro", age: "20"}
        ],
        //otherState: "some other value",
        showPersons: false
        
    }
    
  //switchNameHandler = (newName) => {
//        this.setState({
//            persons:[
//               { name: newName, age: "32"},
//                { name: "Aga", age: "25"},
//                { name: "Bartosz", age: "55"},
//                { name: "Miro", age: "20"}
//        ]
//        });
//    }
    
    nameChangedHandler = (event) => {
        this.setState({
            persons:[
                { name: "Ewelina", age: "18"},
                { name: event.target.value, age: "25"},
                { name: "Bartosz", age: "55"},
                { name: "Miro", age: "20"}
        ]
        });
    }
    
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
   
    
  render() {
      const style = {
          backgroundColor: "white",
          font: "inherit",
          border: "1px solid blue",
          padding: "8px",
          cursor: "pointer"
      };
      
    let persons = null;
    
    if ( this.state.showPersons ) {
        persons = (
           <div>
           {this.state.persons.map((person, index) => {
               return <Person 
               click={() => this.deletePersonHandler(index)}
               name={person.name} 
               age={person.age}/>
           })}
             
            </div>
        );
    }
      
    return (
      <div className="App">
       <h1>Hi, I am a React App</h1>
       <p>This is really working!</p>
       <button 
         style={style}  
         onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
