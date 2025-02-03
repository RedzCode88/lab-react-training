import logo from './logo.svg';
import './App.css';
import todos from './assets/todos.json';
import Todo from './components/Todo';
import { useState } from 'react';
import Laranjas from './components/Laranjas';

function App() {
  return (
    <div className="App">
      <Laranjas/>
      <Laranjas/>
      <Laranjas/>
      <Laranjas/>
    </div>
  );
}

export default App;
