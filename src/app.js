import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';



class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Tom Wilson",
        phone: "(215) 358-4567",
        email: "tomwilson;learningcontainer.com",
        dob: "08-13-1987"
      },
      {
        id: 2,
        image: "",
        name: "Tod Morris",
        phone: "(215) 878-8910",
        email: "todmorris;learningcontainer.com",
        dob: "05-15-1980"
      },
      {
        id: 3,
        image: "",
        name: "Sandy Jones",
        phone: "(312) 215-1002",
        email: "sandyjones@learningcontainer.com",
        dob: "02-02-2001"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Use the search box for your results.</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;