
import React, { Component } from 'react';
import './App.css';

class TaskForm extends Component {
  state = {
    taskName: '',
    description: '',
    dueDate: '',
    error: '',
    tasks: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { taskName, description, dueDate } = this.state;
    if (!taskName || !description || !dueDate) {
      this.setState({ error: 'All fields are required' });
      return;
    }
  
    const newTask = {
      taskName,
      description,
      dueDate
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
      taskName: '',
      description: '',
      dueDate: '',
      error: ''
    }));
  };

  render() {
    const { taskName, description, dueDate, error, tasks } = this.state;
    return (
      <div className="task-form-container">
        <form className="task-form" onSubmit={this.handleSubmit}>
          {error && <div className="error">{error}</div>}
          <input type="text" name="taskName" value={taskName} onChange={this.handleChange} placeholder="Task Name" />
          <textarea name="description" value={description} onChange={this.handleChange} placeholder="Description" />
          <input type="date" name="dueDate" value={dueDate} onChange={this.handleChange} />
          <button type="submit">Add Task</button>
        </form>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <h3>{task.taskName}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskForm;
