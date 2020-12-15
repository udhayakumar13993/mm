import React,{Component} from 'react'

import './App.css';
 
import {CardList} from './components/cardlist/CardList'
import SearchBox from './components/searchBox/searchBox'
class App extends Component{
constructor(){
  // Extends the component constructor from React.Component Method
  super();
  //State for An App
  this.state={

    monsters:[],
    searchField:''
  }
  //this.handleChange= this.handleChange.bind(this);
}
// Method to Mount the Data before calling the state in return
componentDidMount(){

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}))
}
//We need to bind this keyword before calling any function if it is an normal function

//handleChange(e){

  //this.setState({searchField:e.target.value});
//}

//No need to bind the handlechange function if it is an arrow function
handleChange=(e)=>{
  this.setState({searchField:e.target.value});
}
  render(){
    const {monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter(
     monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    )
    return (
      <div className="App">
      <h1>Monsters</h1>
      <SearchBox 
          placeholder="Search Monsters" 
          handleChange={this.handleChange}/>
      <CardList monsters ={filteredMonsters}>
        </CardList>
      </div>
    ); }
}

export default App;
