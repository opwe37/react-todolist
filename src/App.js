import './App.css';
import TodoContainer from './TodoContainer';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  return (
    <TodoContainer>
      <TodoHeader date="2021-07-14" week="수요일"></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList />
    </TodoContainer>
  );
}

export default App;
