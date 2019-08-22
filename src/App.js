import React , {Component} from 'react';
import './App.css';
import Tasks from './Tasks'
import Filter from './Filter'

class App extends Component {
  
  constructor(props) {
 super(props)
  this.state = {
    tasks: [
     
       
      
     
          
        
    ],
   
    
    
    filterTask: 
      ""
    
  } 
 
}

 
  addTask(e){

    e.preventDefault();
    const tasks = [...this.state.tasks]
    const newTask = this.newTask.value;
    const day = this.day.value;
    const priority = this.priority.value;
    let long = this.state.tasks.length + 1;
    
    const obj = {id: long , name: newTask, day: day, priority: priority};
   
  
    this.setState(previousState => ({
      tasks: [...previousState.tasks, obj]
     
 
  })
  
  ); 
  // tasks.forEach((tasks, i) => {
  //   tasks.id = i + 1;
  // })
  console.log(tasks)
} 
 

filterTasks = (props) => {
  console.log(props.target.value)



  this.setState({
    filterTask: props.target.value
    
  })
  
    
  }


SortByDay(e){

 const postlist = this.state.tasks
 let newlist = postlist
 this.setState({
   postlist: newlist.sort((a, b) => (a.day > b.day) ? 1 : -1).reverse()
 })
}

SortByName(e){

  const postlist = this.state.tasks
  let newlist = postlist.reverse()
  this.setState({
    postlist: newlist.sort((a, b) => (a.name > b.name) ? 1 : -1).reverse()
  })
 }

 SortByPriority(e){

  const postlist = this.state.tasks
  let newlist = postlist.reverse()
  this.setState({
    postlist: newlist.sort((a, b) => (a.priority > b.priority) ? 1 : -1).reverse()
  })
 }


deleteTask = (index, e) => {
 
  //const tasks = [...this.state.tasks];
  const tasks = Object.assign([], this.state.tasks);
  tasks.splice(index, 1);
  this.setState({tasks:tasks});
  tasks.forEach((tasks, i) => {
    tasks.id = i + 1;
  })

}

render() {
 let filteredTasks = this.state.tasks.filter((task)=>{ if(this.state.tasks.length === 0) {
   return  this.state.tasks }
   else {
     return task.day.toLocaleLowerCase().includes(this.state.filterTask.toLowerCase())}
   }
 )
 
return (
      <div className="container">
        <form className ="input" onSubmit={(e) => {this.addTask(e)}}>
          <input ref={input => this.newTask = input} type="text" id="newTask" placeholder="Add task"></input>
          <select className = "custom-select" ref={select => this.day = select} type="text" id='day'>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
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
          <table className = "table"> 
          <thead>
            <tr>
            <th onClick={(e) => {this.SortByName(e)}}>Task  <i class="fa fa-angle-double-down"></i></th>
            <th onClick={(e) => {this.SortByDay(e)}}>Day  <i class="fa fa-angle-double-down"></i></th>
            <th onClick={(e) => {this.SortByPriority(e)}}>Priority  <i class="fa fa-angle-double-down"></i></th>
            </tr>
            </thead>
           <Tasks filteredTasks={filteredTasks} deleteTask={this.deleteTask} filterTasks={this.filterTasks}/>
       </table>
<Filter filterTasks={this.filterTasks}/>
      </div>
      </div>
    );
  }
}
export default App;