import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Task from './components/task';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: null
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/tasks`)
      .then(res => {
        this.setState({tasks: res.data});
      });
  }

  renderTasks() {
    if (!this.state.tasks)
      return <h2> carregando </h2>

    return this.state.tasks.map(task => {
      return (
        <Task key={task.id} id={task.id} title={task.title} />
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderTasks() }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
