import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title
    }
  }

  render() {
    return(
      <h2>
        { this.state.title }
      </h2>
    );
  }
}

export default Task;
