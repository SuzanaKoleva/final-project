import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { addNewUser } from '../Users/actions/actions';
import { connect } from 'react-redux';
import userStorage from '../Users/reducers/store';


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

let isValid = true;
// let users = [];

class Register extends React.Component{
    
    state = {
        newUser: {
            username: '',
            email: '',
            password: '',
            // confirmPassword: '',
        }
    }

    setUsername = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.username = value;
        this.setState({ newUser });
    }

    setEmail = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.email = value;
        this.setState({ newUser });
    }

    setPassword = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.password = value;
        this.setState({ newUser });
    }

    addNewUser = event => {
        event.preventDefault();
        if(validateEmail(this.state.newUser.email) && validateUsername(this.state.newUser.username)
        && validatePassword(this.state.newUser.password)){
            userStorage.users.push(this.state.newUser);
            // localStorage.setItem('users', JSON.stringify(users));
            this.props.addNewUser(this.state.newUser);
            this.state.newUser.categories = [];
            this.state.newUser.folllowed = [];
            this.state.newUser.isLogged = false;
            const newUser = {username: '', email: '', password: ''};
            this.setState({ newUser });
            this.props.history.replace('/login');
            console.log('uspeh');
        }else{
            console.log('Invalid email or password');
            isValid = false;
        }
        const newUser = {username: '', email: '', password: ''};
        this.setState({ newUser })
    }

    render() {
        return (
            <div>
                <h1>New registration in <strong>tumblr</strong></h1>
                <form>
                    <div style={myStyles}>
                        <Input onChange={this.setUsername} value={this.state.newUser.username}
                            style={inputStyles} type="text" placeholder="Username"/>

                        <Input onChange={this.setEmail} value={this.state.newUser.email}
                            style={inputStyles} type="input" placeholder="Email"/>

                        <Input onChange={this.setPassword} value={this.state.newUser.password}
                            style={inputStyles} type="password" placeholder="Password"/>

                        {/* <Input style={inputStyles} type="password" placeholder="Confirm password"/>  */}
                        <Button onClick={this.addNewUser} style={inputStyles} title="Sign up"/>
                        {isValid ? 
                            <span></span>
                        :   <label>Invalid, username, password or email!</label>}
                        </div>    
                </form>
            </div>);
    }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateUsername(username) {
    var re = /^[a-zA-Z0-9]+$/;
    return re.test(String(username).toLowerCase());
}
function validatePassword(password)
{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(password);
}
const mapDispatchToProps = dispatch => {
    return {
        addNewUser: user => dispatch(addNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register);