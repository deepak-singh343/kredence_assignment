import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { signOut,updatePassword} from '../actions/auth';
class Users extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            passwrd:''
        };
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.dispatch(updatePassword(this.state.passwrd));
        this.props.dispatch(signOut());        
    }
    signout=()=>
    {
        this.props.dispatch(signOut());
    }
    change=()=>{
        let change_password=document.getElementById('show_hide');
        change_password.style.display='block';
        let change_btn=document.getElementById('change_btn');
        change_btn.style.display='none';
        let passwrd=document.getElementById('passwrd');
        passwrd.style.display='none';
    }
  render()
 {
    const {auth,profile} = this.props;
    if(!auth.uid)
        return <Redirect to='/signin'/>
    return (
            <div id='user-profile'>
                <div>
                    <span id='label'>UserName:</span>
                    <span id='user'>{profile.name}</span>
                </div>
                <br/>
                <div id='passwrd'>
                    <span id='label'>Password:</span>
                    <span id='user-pwd'>*******</span>
                    
                </div>
                <div id='show_hide'>
                    <form onSubmit={this.handleSubmit} id='change-pwd-form'>
                        <span id='label'>New Password:   </span>
                        <input type="password" id="passwrd" onChange={this.handleChange} required/>
                        <div>
                            <button className="btn pink lighten-1 z-depth-0" id='save-pass'>Save Password</button>   
                        </div>
                    </form> 
                </div>
                <button className="waves-effect blue btn" id='change_btn' onClick={this.change}>Change Password</button>
                <button className="waves-effect waves-light btn" onClick={this.signout} id='logout'>LogOut</button>
                
            </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Users);
