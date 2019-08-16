import React from 'react';




const Tasks = ({tasks, deleteTask}) => {

  const taskList = tasks.length ? (
    tasks.map(task => {
      return (
        <tr className = {task.priority} key={task.id} onClick={() => {deleteTask(task.id -1)}}>
          <th>{task.name}</th>  
          <th>{task.day}</th>  
          <th> {task.priority}</th>
        </tr>
      )
    })
  ) : (
    <p className="center">No tasks for today</p>
  );
  return (
    <tbody>
      {taskList}
      </tbody>
  )
}
export default Tasks;