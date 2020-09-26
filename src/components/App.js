import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './nav/Navbar';
import Tasks from './TasksList';
import Users from './Users';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
class App extends React.Component {
  render() {
    return (
      <Router>
            <div>
              <Navbar/>
              <Switch>
                  <Route path='/tasks' component={Tasks}/>
                  <Route path='/users' component={Users}/>
                  <Route exact path='/' component={Home}/>
                  <Route  path='/signup' component={SignUp}/>
                  <Route  path='/signin' component={SignIn}/>
              </Switch>  
          </div>
      </Router>
    );
  }
}
export default App;
