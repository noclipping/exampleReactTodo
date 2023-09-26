import { useState } from "react";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import { useLocalStorage } from "../useLocalStorage";
export default function TodoList() {
  // what is a todo? -> {id:Number, text:String, completed:Boolean}

  const [todos, setTodos] = useLocalStorage("todos", []);

  function createTodo(text) {
    let id = Math.floor(Math.random() * 900000); // creates a random number between 0 - 9000
    let todo = { id: id, text: text, completed: false };
    setTodos([...todos, todo]);
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    console.log(id, "id");
    let filteredTodos = [...todos].filter((todo) => {
      console.log(todo.id === id, "todoid");
      if (todo.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredTodos, "filteredTodos");
    setTodos(filteredTodos);
  }

  function updateTodo(id, text) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      })
    );
  }

  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <CreateTodo createTodo={createTodo} />

      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
}
