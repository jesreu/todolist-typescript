import React, { useState } from "react";
import TodoTable from "./Todotable";

function Todolist() {

  const [todo, setTodo] = useState({ desc: "", date: "" , prio: ""});
  const [todos, setTodos] = useState<Array<Object>>([]);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const deleteTodo = (row: number) => {
    setTodos(todos.filter((todo, index) => row !== index))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        Description:
          <input name="desc" value={todo.desc} onChange={inputChanged}/>
        Date:
          <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        Priority:
          <input name="prio" value={todo.prio} onChange={inputChanged} />
          <input type="submit" value="Add" />
      </form>
      <TodoTable deleteRow={deleteTodo} todos={todos}/>
    </div>
  );
}

export default Todolist;