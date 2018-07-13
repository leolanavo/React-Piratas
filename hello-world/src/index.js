import React from 'react';
import ReactDOM from 'react-dom';

// Declaramos um classe App que estende o Componente do React,
// isto nos disponibiliza a função 'render()' que é usada para 
// renderizar o componente na tela.
class App extends React.Component {
  render() {
    return (
      <h1> Hello, World </h1>
    );
  }
}

// Por decisões de projeto, o React separou-se em duas bibliotecas,
// o React que compila o código em JS, e o ReactDOM que usa o código,
// compilado pelo React, para renderizar o código na tela.
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
