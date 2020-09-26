import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect } from 'react-redux' ;
import {signUp} from '../actions/auth';
class SignUp extends Component {
    state={
        email:'',
        password:'',
        username:'',
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.dispatch(signUp(this.state));
    }
    render() {
        const {auth,authError}=this.props;
        if(auth.uid)
            return <Redirect to='/'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Register</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">Username</label>
                        <input type="text" name="" id="username" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                        <div className="red-text center">
                            {authError?<p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
export default connect(mapStateToProps)(SignUp);
