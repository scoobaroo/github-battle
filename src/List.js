import React, { Component } from 'react';
import './App.css';

class List extends Component {
  render() {
    return (
      <div>
        <h1>Item 1:</h1> {this.props.list.item1}
        <h1>Item 2:</h1> {this.props.list.item2}
        <h1>Item 3:</h1> {this.props.list.item3}
        <h1>Item 4:</h1> {this.props.list.item4}
        <h1>Item 5:</h1> {this.props.list.item5}
      </div>
    );
  }
}

export default List;
