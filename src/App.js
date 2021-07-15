import './App.css';
import TodoContainer from './TodoContainer';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import React, { useState, useRef, useCallback, useReducer } from 'react';

function createBulkTodos() {
  const arr = [];
  for (let i = 0; i < 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return arr;
}

function reducer(todos, action) {
  switch (action.type) {
    case 'Insert':
      return todos.concat(action.todo);
    case 'Remove':
      return todos.filter(todo => todo.id != action.id);
    case 'Toggle':
      return todos.map(todo => todo.id == action.id ? {...todo, checked: !todo.checked} : todo);
    default:
      return todos;
  }
}

function App() {

  // [
  //   { id: 0, text: 'Algorithm', checked: false },
  //   { id: 1, text: 'Django', checked: false },
  //   { id: 2, text: 'React', checked: false }
  // ]

  // useReducer(reducer, init) : init=>undefined, 최초 렌더링 시에 3번째 인자로 주어진 함수를 돌림
  const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);

  let todoId = useRef(2501)

  const addTodo = useCallback((value) => {
    const todo = { id: todoId.current, text: value, checked: false };
    // setTodo(todo => todo.concat(newItem));
    dispatch({type: 'Insert', todo})
    todoId.current += 1;
  }, []);

  const checkTodo = useCallback((id) => {
    // setTodo(todo => todo.map(item => 
    //   item.id == targetId ? { ...item, checked: !item.checked } : item
    // ) );
    dispatch({type: 'Toggle', id})
  }, [])

  const removeTodo = useCallback((id) => {
    // setTodo(todo => todo.filter(item => item.id != targetId));
    dispatch({type: 'Remove', id})
  }, [])

  const date = new Date();
  let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
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
      <TodoList contents={todos} onCheck={checkTodo} onRemove={removeTodo}/>
    </TodoContainer>
  );
}

export default App;
