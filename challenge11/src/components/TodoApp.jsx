import React from 'react';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import useTodo from './useTodo';

export const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleComplete, countTodos, countPendingTodos } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {countTodos}, <small> pendientes: {countPendingTodos}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleComplete} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={addTodo} />
        </div>
      </div>
    </>
  );
};
