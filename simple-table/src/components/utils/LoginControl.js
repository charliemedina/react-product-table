import React, {Component} from 'react';

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends Component {
    
}