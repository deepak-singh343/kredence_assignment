import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
const SignedInLinks=(props)=> {
    const {profile} =props;
    return (
        <ul className='right'>
            <li>
                <Link to={'/'} className="nav-link">
                    Home
                </Link>
            </li>
            <li>
                <Link to={'/tasks'} className="nav-link">
                    Tasks
                </Link>
            </li>
            <li>
                <Link to={'/users'} className="nav-link">
                    <span id='user-name'>{profile.name}</span>
                </Link> 
            </li>
            <li>
                
            </li> 
        </ul>
        
    );
}
const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks,
        profile:state.firebase.profile

    }
}
export default connect(mapStateToProps)(SignedInLinks);