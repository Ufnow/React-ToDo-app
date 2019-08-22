import React from 'react';




const Tasks = ({ deleteTask, filteredTasks}) => {

  const taskList = filteredTasks.length ? ( 
    
    filteredTasks.map(task => {
      return (
        <tr className = {task.priority} key={task.id} onClick={() => {deleteTask(task.id -1)}}>
          <th>{task.name}</th>  
          <th>{task.day}</th>  
          <th> {task.priority}</th>
        </tr>
      )
    })
  ) : (
    <tr><th className="center">No more tasks for today</th></tr>
  );
  return (
    <tbody>
      {taskList}
      </tbody>
  )
}
export default Tasks;