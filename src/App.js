import React, { Component } from 'react';
import CardList from './CardList';
import { users } from './users';
import SearchBox from './SearchBox';


class App extends Component {
  constructor () {
    super()
    this.state = {
      users: users,
      searchValue: ''
    }
  }

   onSearchChange = (event) => {
     this.setState({ searchValue: event.target.value })
  };

  render() {
    const filteredUsers = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
    })

    return (
      <div className="tc">
        <h1>Social List</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList users={filteredUsers}/>
      </div>
    )
  }
}

export default App;
