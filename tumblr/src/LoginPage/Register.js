import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { addNewUser } from '../Users/actions/users';
import { connect } from 'react-redux';


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

let users = [];

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
        users.push(this.state.newUser);
        localStorage.setItem('users', JSON.stringify(users));
        this.props.addNewUser(this.state.newUser);
        const newUser = {username: '', email: '', password: ''};
        this.setState({ newUser });
        this.props.history.replace('/login');
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
                        </div>    
                </form>
            </div>);
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewUser: user => dispatch(addNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register);