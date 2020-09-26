import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import {createFirestoreInstance} from "redux-firestore";
import { ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "firebase/app";
const store = configureStore();
const config={
  userProfile:'users',
  useFirestoreForProfile:true
}

const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);