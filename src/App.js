import logo from './logo.svg';
import './App.css';
import todos from "./assets/todos.json"
import Todo from './components/Todo';

function App() {
  return (
    <div className='App'>

      {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}

    </div>
  );
}

export default App;
