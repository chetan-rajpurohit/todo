import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>TODO App <span className='subheading'>(using Redux Toolkit)</span></h1>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
