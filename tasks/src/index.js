// Aqui usamos um pouco de síntaxe ES6 para deconstruir o objeto
// do React, para usarmos a 'Component' ao invés de 'React.Component'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Aqui importamos o componente que está no arquivo 'components/task',
// com o nome Task, isto nos disponibilizará uma tag Task
import Task from './components/task';

class App extends Component {
  constructor(props) {
    super(props);

    // No React, os componentes podem ter estados, isto é importante,
    // porque mudanças no estado fazem com que o componente, re-renderize
    // automaticamente
    this.state = {
      tasks: null
    };
  }

  // Aqui usamos mais um pouco de síntaxe do ES6, onde declaramos a função
  // async, desse jeito fica disponivel a keyword 'await' dentro da função
  // essa keyword nos permite usar uma síntaxe mais limpa, como você vê abaixo:
  async componentDidMount() {
    const response = await axios.get(`http://localhost:3004/tasks`);
    this.setState({ tasks: response.data });
  }

  // Podemos usar funções para retornar código que necesssita de lógica,
  // por exmpelo, este trecho de código usa if's para definir qual trecho
  // será mostrado.
  // Outro ponto para fazermos isso, é que é um anti-padrão colocarmos
  // lógica na função 'render()'
  renderTasks() {
    if (!this.state.tasks)
      return <h2> carregando </h2>

    return this.state.tasks.map(task => {
      return (
        <Task key={task.id} title={task.title} />
      );
    });
  }


  // Para usarmos variáveis do JS na hora de gerar o cógido JSX, precisamos
  // usar chaves.
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
