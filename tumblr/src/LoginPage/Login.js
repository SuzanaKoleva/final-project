import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';


const onLogin = props => {
    sessionStorage.setItem('user', 'gosho');
    //user logged succesfully
    props.history.replace('/');
}
const register = props => {
    props.history.replace('/register');
}
const myStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
const inputStyles = {
    marginBottom: '10px',
    padding: '12px',
    width: '270px',
}

const login = props => {    
    return (
    <div>
        <div style={myStyles}>
            <h1>tumblr</h1>
            <Input style={inputStyles} type="input" placeholder="Email"/>
            <Input style={inputStyles} type="password" placeholder="Password"/>
            <Button onClick={() => onLogin(props)}style={inputStyles} title="Log in"/>
            <Button onClick={() => register(props)}style={inputStyles} title="New register"/>
        </div>
    </div>);
}

export default login;