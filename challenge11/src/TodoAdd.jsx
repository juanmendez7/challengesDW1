import React from 'react';

export const TodoAdd = ({ onNewTodo }) => {
  const [newTask, setNewTask] = React.useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() === '') {
      return;
    }

    onNewTodo(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <input
        type="text"
        placeholder="Tarea"
        className="form-control"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

