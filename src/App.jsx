import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos`;
const url2 = `https://jsonplaceholder.typicode.com/albums`;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(url2).then((response) => {
      console.log('Chamada feita.');
      setTodos(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Os meus todos</h1>

      {todos.map(todo => <div key={todo.id}> {todo.title} </div>)}

    </div>
  );
}

export default App;
