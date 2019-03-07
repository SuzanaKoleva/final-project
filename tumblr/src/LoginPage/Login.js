import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { onLogin } from '../Users/actions/actions';
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

class Login extends React.Component{

    state = {
        findUser: {
            email: '',
            password: '',
        }
    }

    setEmail = event => {
        const value = event.target.value;
        const findUser = {...this.state.findUser};
        findUser.email = value;
        this.setState({ findUser });
    }

    checkEmail = email => {
        return this.props.users.some(user => user.email === email);
    }

    setPassword = event => {
        const value = event.target.value;
        const findUser = {...this.state.findUser};
        findUser.password = value;
        this.setState({ findUser });
    }

    checkPassword = password => {
        return this.props.users.some(user => user.password === password);
    }

    onLoginUser = event => {
        event.preventDefault();

        const findMe = this.props.users.find(user => user.email === this.state.findUser.email
            && user.password === this.state.findUser.password);
        this.props.onLogin(findMe);
        this.props.history.push('/');
    }

    goToRegister = event => {
        event.preventDefault();
        this.props.history.replace('/register');
    }

    render() {
        return (
            <div>
                <h1>tumblr</h1>
                <form>
                    <div style={myStyles}>
                         <Input onChange={this.setEmail} value={this.state.findUser.email}
                            style={inputStyles} type="input" placeholder="Email"/>

                        <Input onChange={this.setPassword} value={this.state.findUser.password}
                            style={inputStyles} type="password" placeholder="Password"/>
                        <Button onClick={this.onLoginUser} style={inputStyles} title="Log in"/>
                        <Button onClick={this.goToRegister} style={inputStyles} title="New register"/>
                        </div>
                </form>
            </div>);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: user => dispatch(onLogin(user))
    }
} 

export default connect(null, mapDispatchToProps)(Login);