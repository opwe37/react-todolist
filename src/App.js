import logo from './logo.svg';
import './App.css';
import TodoContainer from './TodoContainer';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

function App() {
  return (
    <TodoContainer>
      <TodoHeader date="2021-07-14" week="수요일"></TodoHeader>
      <TodoInput></TodoInput>
    </TodoContainer>
  );
}

export default App;
