import React, {Component} from 'react'
import './App.css';
import List from './List'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {item1: '', item2: '', item3:'', item4 : '', item5:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({item1: event.target.item1,
                   item2: event.target.item2,
                   item3: event.target.item3,
                   item4: event.target.item4,
                   item5: event.target.item5
                 });
  }

  handleSubmit(event) {
    alert('Text field item1 is: ' + this.state.item1 +
          'Text field item2 is: ' + this.state.item2 +
          'Text field item3 is: ' + this.state.item3 +
          'Text field item4 is: ' + this.state.item4 +
          'Text field item5 is: ' + this.state.item5);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Gratitude List Item 1!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 2!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 3!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 4!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 5!"
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
