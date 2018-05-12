import React, { Component } from 'react';
import axios from 'axios';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({title : event.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    axios.patch(`http://localhost:3004/tasks/${this.state.id}`,
      { title: this.state.title }
    )
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default Task;
