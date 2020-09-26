import {SHOW_TASKS,ADD_NEW_TASK,DELETE_TASK} from '../actions/actionTypes';
const defaultData={
    tasks:[]
}
export default function products(state =defaultData, action) {
    switch (action.type) {
        case SHOW_TASKS:
            return {
                ...state,
                tasks:action.tasks
            }
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks:[...state.tasks,action.task]
            }        
        case DELETE_TASK:
            console.log(state);
            return {
                ...state,
                tasks:state.tasks.filter(task=>task.id!==action.task.task.id)
            }
        default:
            return state;
    }

}