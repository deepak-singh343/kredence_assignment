import { combineReducers } from 'redux';
import Tasks from './Tasks';
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
export default combineReducers({
     Tasks,
     auth:authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer 
});