// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/Body';
import Filters from './components/Filters';
import Header from './components/Header';

class App extends React.Component {

  state = {
    users: "", // Return from API call would pass in here. THEN its passed to the component below.
    search: "" //
  };

  handleInputChange = event => {
    //Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {

    return (

      <div className="App">
        <Header />
        <Filters handleInputChange={this.handleInputChange} />
        {this.state.search}
        <Body users={this.state.users} search={this.state.search} />

      </div>

    );
  }
}

export default App;
