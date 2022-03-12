import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./appCss.css";

class App extends Component{
    constructor () {
    super()
    this.state= {
        robots: [],
        searchfield: ''
    }
    console.log('constructor');
  }
  

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response =>Response.json())
      .then (users => this.setState({ robots: users}));
    
    console.log('componentDIdmount');
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
  }

    render(){
        const filteredRobots = this.state.robots.filter(Searchrobot => {  
            return Searchrobot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log('render');
        return(
            <div className='tc'>
                <h1 className="f1">Robos Syndicate</h1> 
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                 <CardList robots={filteredRobots} /> 
                </Scroll>
            </div>
        );
}
}

export default App;