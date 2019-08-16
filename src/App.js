import React , {Component} from 'react';
import './App.css';
import Tasks from './Tasks'


class App extends Component {
  
  constructor(props) {
 super(props)
  this.state = {
    tasks: [
        
          
        
    ]

  } 
  
}
 
  addTask(e){

    e.preventDefault();
    const tasks = [this.state.tasks];
    const newTask = this.newTask.value;
    const day = this.day.value;
    const priority = this.priority.value;
    let long = this.state.tasks.length + 1;
    
    const obj = {id: long , name: newTask, day: day, priority: priority};
    function Validate (tasks) {
      return tasks === newTask.value;
    }
    
    if(tasks.find(Validate) === newTask.name){
  
    this.setState(previousState => ({
      tasks: [...previousState.tasks, obj]
}),
  tasks.forEach((tasks, i) => {
    tasks.id = i + 1;
  })
  
  ); } 
  else {
    console.log('Error');
    
  }
  console.log(tasks);
  
  
  }



//     deleteTask = (id) => {
//     const tasks = this.state.tasks.filter(task => {
//       return task.id !== id
//     });
//     this.setState({
//       tasks
//     });
// // }
deleteTask = (index, e) => {
 
  //const tasks = [...this.state.tasks];
  const tasks = Object.assign([], this.state.tasks);
  tasks.splice(index, 1);
  this.setState({tasks:tasks});
  tasks.forEach((tasks, i) => {
    tasks.id = i + 1;
  })

}

// deleteTask(task){
//   const newTasks = this.state.tasks.filter(newTask => {
//     return newTask !== task;
//   })

//   this.setState({
    

//       tasks: [...newTasks]
//   })
//   newTasks.forEach((tasks, i) => {
//     tasks.id = i + 1;
//   })







  render() {
 
    return (
      <div className="container">
        <form className ="input" onSubmit={(e) => {this.addTask(e)}}>
          <input ref={input => this.newTask = input} type="text" id="newTask" placeholder="Add task"></input>
          <select className = "custom-select" ref={select => this.day = select} type="text" id='day'>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Saturday</option>
            <option>Sunday</option>
            </select>
            <select className = "custom-select" ref={select => this.priority = select} type="text" id='priority'>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
            
            </select>

          <button type="submit">Add</button>
        </form>
        <div className="tasks">
          <table className = "table"> <thead><tr>
            <th>Task</th>
            <th>Day</th>
            <th>Priority</th>
            </tr>
            </thead>
           
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
       
        </table>

      </div>
      </div>
    );
  }
}
export default App;