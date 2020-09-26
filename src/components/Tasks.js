import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteTask} from '../actions/tasks';

class Tasks extends Component {
    delete=()=>{
        console.log(this.props);
        const task=this.props;
        this.props.dispatch(deleteTask(task));
    }
    render() {
        const { task } = this.props;
        return (
            <div>
                <div className='task-details'>
                    <div className='id'>{task.id}</div>
                    <div className='title'>{task.title}</div>
                    <div className='status'>{task.completed.toString()}</div>
                    <div className='delete-btn'><button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button></div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}
export default connect (mapStateToProps)(Tasks);