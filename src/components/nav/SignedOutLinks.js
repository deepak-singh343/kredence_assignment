import React from 'react';
import {Link} from 'react-router-dom';
function SignedOutLinks(props) {
    return (
        <ul className='right'>
            <li>
                <Link to={'/signup'}>SignUp</Link>
            </li>
            <li>
                <Link to={'/signin'}>LogIn</Link>
            </li>  
        </ul>
    );
}

export default SignedOutLinks;