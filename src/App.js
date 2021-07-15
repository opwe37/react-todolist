import './App.css';
import TodoContainer from './TodoContainer';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import React, { useState, useRef } from 'react';

function App() {

  const [todo, setTodo] = useState([
    { id: 0, text: 'Algorithm', checked: false },
    { id: 1, text: 'Django', checked: false },
    { id: 2, text: 'React', checked: false }
  ]);

  let todoId = useRef(3)

  const addTodo = (value) => {
    const newItem = { id: todoId.current, text: value, checked: false };
    setTodo(todo.concat(newItem));
    todoId.current += 1;
  }

  const checkTodo = (targetId) => {
    setTodo( todo.map(item => 
      item.id == targetId ? { ...item, checked: !item.checked } : item
    ) );
  }

  const removeTodo = (targetId) => {
    const newTodoList = todo.filter(item => item.id != targetId);
    setTodo(newTodoList);
  }

  const date = new Date();
  let [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
  month = Number(month) + 1;
  month = month < 10 ? '0' + String(month) : month
  const now = year + '.' + month + '.' + day;

  let week = date.getDay();
  switch (week) {
    case 0: week = '일요일'; break;
    case 1: week = '월요일'; break;
    case 2: week = '화요일'; break;
    case 3: week = '수요일'; break;
    case 4: week = '목요일'; break;
    case 5: week = '금요일'; break;
    case 6: week = '토요일'; break;
    default:
      break;
  }

  return (
    <TodoContainer>
      <TodoHeader date={now} week={week}></TodoHeader>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList contents={todo} onCheck={checkTodo} onRemove={removeTodo}/>
    </TodoContainer>
  );
}

export default App;
