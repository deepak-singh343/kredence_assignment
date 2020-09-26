import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks,addNewTask} from '../actions/tasks';
import Tasks from './Tasks';
import {Redirect} from 'react-router-dom';
class TasksList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }
    constructor(props)
    {
        super(props);
        this.state={
            task:{
                id:'',
                title:'',
                completed:''
            }
        };
    }
    show_hide=()=>{
      let add_form=document.getElementById('add-task-form');
      add_form.style.display='block';
      let show_task_btn=document.getElementById('show-task-btn');
      show_task_btn.style.display='none';
    }
    handleInputChange=(field,value)=>{
        this.setState({[field]:value});
    }
    addTask=(event)=>
    {
        event.preventDefault();
        let id=this.props.tasks.Tasks.tasks.length+1;
        const {task}=this.state;
        const{title,completed}=this.state;
        task.id=id;
        task.title=title;
        task.completed=completed;
        this.setState({
           task:task 
        });
        let inputs=document.querySelectorAll('input');
        inputs.forEach(input=>input.value='');
        this.props.dispatch(addNewTask(task));
        this.setState({
          task:{

          }
        })
        let add_form=document.getElementById('add-task-form');
        add_form.style.display='none';
        let show_btn=document.getElementById('show-task-btn');
        show_btn.style.display='block';
    }
  setStatus=(event)=>{
    this.setState({
      completed:event.target.value
    });
  }
  render() {
    const { tasks,auth} = this.props;
    if(!auth.uid)
        return <Redirect to='/signin'/>
    const fetchedTasks=tasks.Tasks.tasks;
    const taskList=fetchedTasks.length>0?(
        fetchedTasks.map((task,index) => 
            <Tasks task={task} key={index}/>
        )
    ):(<div id='loading'>
            No Task
        </div>)
    return (
            <div>
              {taskList}
              <div>
                    <button type="button" id='show-task-btn' className="btn btn-primary" onClick={this.show_hide}>Add Task</button>
              </div>
              <div id='add-task-form'>
                    <form className='add-task'>
                          <div className='field'>
                              <div className='label'>
                                  Title
                              </div>
                              <div className='input-field'>
                                  <input type='text' placeholder='Enter Name of Product' required onChange={(e)=>this.handleInputChange('title',e.target.value)}/>
                              </div>
                          </div>
                          <div className='field'>
                              <span>
                                  <label>
                                    <input class="with-gap" name="status" type="radio" value="true" onChange={this.setStatus}/>
                                    <span>true</span>
                                  </label>
                              </span>
                              <span>
                                  <label>
                                    <input class="with-gap" name="status" type="radio" value="false" onChange={this.setStatus}/>
                                    <span>false</span>
                                  </label>
                              </span>
                          </div>
                          <button type="button" id='add_btn'className="btn btn-success" onClick={this.addTask}>Add Task</button>
                      </form>
              </div>
            </div>
    );
  }

}
function mapStateToProps(state) {
  return {  
     tasks:state,
     auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(TasksList);
