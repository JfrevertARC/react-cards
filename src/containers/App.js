import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    let randUsers = []
      randUsers.push(fetch('https://jsonplaceholder.typicode.com/users/')
              .then(response => {
                return response.json()
              })
              .then(json =>{
                this.setState({ users: json })
              })
              .catch(err => {
                console.log(err);
              }))
  }

  onSearchChange = (event) => {
     this.setState({ searchValue: event.target.value })
  };

  render() {
    const { users, searchValue } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    return !users.length ?
       <h1 className='tc'>Loading</h1> :
       (
        <div className="tc">
          <h1>Social List</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList users={filteredUsers}/>
          </Scroll>
        </div>
      )
  }
}

export default App;
