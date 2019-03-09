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

let id = 2;

class Register extends React.Component{

    state = {
        newUser: {
            username: '',
            email: '',
            password: '',
            followed: [],
            categories: [],
            posts: [],
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

    validation = () => {
        let hasErrors = false;

        if(!this.validateUsername(this.state.newUser.username)){
            hasErrors = true;
        }
        if(!this.validateEmail(this.state.newUser.email)){
            hasErrors = true;
        }
        if(!this.validatePassword(this.state.newUser.password)){
            hasErrors = true;
        }
        return hasErrors;
    }

    addNewUser = event => {
        event.preventDefault();
        const hasErrors = this.validation();
        if(!hasErrors){
            this.state.newUser.userId = ++id;
            this.props.addNewUser(this.state.newUser);
            console.log(this.props);

            const newUser = {username: '', email: '', password: ''};
            this.setState({ newUser });
            this.props.history.goBack();
            console.log('uspeh');   
            console.log(this.props.users);
        }else{
            console.log('grehska');
            console.log(this.props);
            console.log(this.props.users);
            console.log(this.props.history);
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