import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  // add a todo
  const addTodo = () => {
    if(input.trim()) { // if input is not empty
      // add new element to existing todos
      // Date.now() for unique id, text field contains input, task is not completed as default
      setTodos([...todos, {id: Date.now(), text: input, completed: false}])

      // set input box value to nill
      setInput("")
    }
  }

  // on enter
  const handleKeyDown = (event) => {
    if(event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div className='main-container'>
        <div className='to-do-list'>
          <h1 className='text-top'>REACT TO-DO LIST</h1>

          <div className='all-items'>
            <input
            className='task-input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder='Add a new task' />
            <button
            className='add-button'
            onClick={addTodo}
            >Add</button>
          </div>

          <ul>
            {
              todos.map((todo) => (
                <li
                key={todo.id}
                >
                  <input 
                  className='check'
                  type="checkbox"
                  onChange={() => setTodos(
                    todos.map((t) => (
                      // find the todo element and change it's status
                      t.id === todo.id ? {...t, completed: !t.completed} : t
                    ))
                  )}
                  checked={todo.completed}
                  />
                  <span
                  className='todo-name'
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                  </span>

                  <button
                  className='delete-button'
                  onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                  >Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
