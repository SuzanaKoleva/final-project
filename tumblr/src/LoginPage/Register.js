import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { addNewUser } from '../Users/actions/actions';
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

class Register extends React.Component{

    state = {
        newUser: {
            username: '',
            email: '',
            password: '',
            followed: [],
            categories: [],
        },
    }

    setUsername = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.username = value;
        this.setState({ newUser });
    }

    validateUsername = username => {
        var re = /^[a-zA-Z0-9]+$/;
        return re.test(String(username).toLowerCase());
    }

    setEmail = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.email = value;
        this.setState({ newUser });
    }

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    setPassword = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.password = value;
        this.setState({ newUser });
    }

    validatePassword = password => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        return re.test(password);
    }

    addNewUser = event => {
        event.preventDefault();
        if(this.validateUsername(this.state.newUser.username) && 
            this.validateEmail(this.state.newUser.email) &&
            this.validatePassword(this.state.newUser.password)){
                this.props.addNewUser(this.state.newUser);

                const newUser = {username: '', email: '', password: ''};
                this.setState({ newUser });
                this.props.history.replace('/login');
                console.log('uspeh');
                console.log(this.props.users);
            }else{
                console.log('grehska')
            }
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

                        <Button onClick={this.addNewUser} style={inputStyles} title="Sign up"/>

                        </div>    
                </form>
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: newUser => dispatch(addNewUser(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);