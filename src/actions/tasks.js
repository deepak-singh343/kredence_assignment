import { SHOW_TASKS,ADD_NEW_TASK ,DELETE_TASK} from './actionTypes';
export function fetchTasks() {
    return (dispatch) => {
        var Url = 'http://jsonplaceholder.typicode.com/todos/?_limit=5'
        fetch(Url)
            .then((response) => {
                return response.json();
            })
            .then((tasks) => {
                dispatch(showTasks(tasks));
            })
    };
}
export function showTasks(tasks) {
    return {
        type: SHOW_TASKS,
        tasks
    }
}

export function addNewTask(task){
    return {
        type:ADD_NEW_TASK,
        task
    }
}

export function deleteTask(task)
{
    return{
        type:DELETE_TASK,
        task
    }
}
