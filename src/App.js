import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import Form from './Form'

var USER_DATA={
  name: "Eric Han",
  username: "Scoobaroo",
  image: "https://s-media-cache-ak0.pinimg.com/originals/d4/e7/aa/d4e7aa60eb6a782d5d25340debaa1ad6.jpg"
}

var LIST_DATA = {
                  item1: "Having a House over my Head",
                  item2: "Having a supportive Family",
                  item3: "Having a wonderful sponsor",
                  item4: "Having the gym",
                  item5: "Having wonderful friends around"
                }


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github Battle</h2>
          <div>{this.props.name}</div>
        </div>
        <Avatar user={USER_DATA} />
        <List list={LIST_DATA} />
        <Form />
      </div>
    );
  }
}

class ProfilePic extends Component {
  render() {
    return(
      <img src={this.props.imageUrl} style={{height:100, width:100}} alt="Profile Pic"/>
    )
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <a href={'http://www.github.com/'+this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends Component {
  render() {
    return (
      <div>{this.props.name} </div>
    )
  }
}

class Avatar extends Component {
  render () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
      </div>
    )
  }
}

export default App;
