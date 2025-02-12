import React from 'react';
import './App.css';
import { useState } from 'react';
import todosJSON from './assets/todos.json'
import Todo from './components/Todo';

function App() {

  // Inicializar Variáveis
  const [todos, setTodos] = useState(todosJSON)
  const [todoTitle, setTodoTitle] = useState("")

  // Código para gerar novo ID com base no ID mais alto que já existe (somado de 1)
  const newId = () => {
    let highestTodo = 0

    todos.forEach(todo => {
      if (todo.id > highestTodo) {
        highestTodo = todo.id
      }
    })

    return highestTodo + 1
  }

  // Ao alterar o input, atualizar a variável state
  const handleChange = (e) => {
    setTodoTitle(e.target.value)
  }

  // Toggle Todo - Ao clicar num todo, trocar o "completed"
  const toggleTodo = (id) => {

    // 1. Criar uma cópia da nossa variável
    const todosCopy = [...todos]

    // 2. Encontrar o todo com o id selecionado (na cópia)
    todosCopy.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })

    // 3. Atualizar a variável "todos" com a cópia *alterada*
    setTodos(todosCopy)
  }

  const editTodoTitle = (id, title) => {

    // 1. Criar uma cópia da nossa variável
    const todosCopy = [...todos]

    // 2. Encontrar o todo com o id selecionado (na cópia)
    todosCopy.forEach(todo => {
      if (todo.id === id) {
        todo.title = title
      }
    })

    // 3. Atualizar a variável "todos" com a cópia *alterada*
    setTodos(todosCopy)
  }

  const deleteTodo = (id) => {
    const todosCopy = todos.filter(todo => todo.id !== id)
    setTodos(todosCopy)
  }

  // Novo Todo - Ao clicar no botão de submissão, colocar um novo Todo com info do utilizador
  const handleSubmit = (e) => {

    e.preventDefault()

    if (!todoTitle) return

    const novoTodo = {
      id: newId(),
      title: todoTitle,
      completed: false
    }

    // Resetar o input após submissão
    setTodoTitle("")

    // Criar cópia do array com um novo todo e seta-o
    setTodos([...todos, novoTodo])
  }

  const todosFeitos = () => todos.filter(todo => todo.completed).length

  return (<div className='App'>

    {/* Colocar a lista de Todos */}
    {todos.map(todo => <Todo key={todo.id} todo={todo}
      editTodoTitle={editTodoTitle}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />)}

    {/* Formulário de Submissão de um novo Todo */}
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={todoTitle} />
      <button>Adicionar Todo</button>
    </form>

    Todos Feitos: {todosFeitos()}

  </div>)
}

export default App;