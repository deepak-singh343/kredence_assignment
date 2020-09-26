import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import {reduxFirestore,getFirestore} from "redux-firestore";
import {getFirebase} from "react-redux-firebase";
import fbConfig from "../config/firebase_config";
import firebase from "firebase/app";
let store;
export function configureStore() {
    store = createStore(reducer,compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }),logger),
        reduxFirestore(fbConfig,firebase)
      ) );
    return store;
}
