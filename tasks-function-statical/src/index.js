import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  renderTasks() {
    const tasks = [
      { title: "Curtir a página do NEU"},
      { title: "Curtir a página do UCL"},
      { title: "Ganhar o Piratas"},
      { title: "Inscrição do HackathonUSP"}
    ];

    return tasks.map((task) => {
      return (
        <h2> { task.title } </h2>
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
)
