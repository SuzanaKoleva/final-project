import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { onLogin } from '../Users/actions/actions';
import { connect } from 'react-redux';
import classes from './loginRegister.module.css';
import Header from '../Header/Header';

const myStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
const buttonStyles = {
    marginBottom: '10px',
    padding: '12px',
    width: '270px',
}
// const fields = {
//     padding: '15px',
//     marginBottom: '10px',
//     width: '270px',
// }

class Login extends React.Component{

    state = {
        userCredentials: {
            email: '',
            password: '',
        }
    }

    setEmail = event => {
        const value = event.target.value;
        const userCredentials = {...this.state.userCredentials};
        userCredentials.email = value;
        this.setState({ userCredentials });
    }

    checkEmail = email => {
        return this.props.users.some(user => user.email === email);
    }

    setPassword = event => {
        const value = event.target.value;
        const userCredentials = {...this.state.userCredentials};
        userCredentials.password = value;
        this.setState({ userCredentials });
    }

    checkPassword = password => {
        return this.props.users.some(user => user.password === password);
    }

    onLoginUser = event => {
        event.preventDefault();
        console.log(this.props.users);
        let foundUser = this.props.users.find(user => user.email === this.state.userCredentials.email
            && user.password === this.state.userCredentials.password);
        
        /**
         * TODO: Display error messages here!
         */
        if (!foundUser) {

            console.error('No user found: ', this.state.userCredentials);
            return;
        }   

        this.props.triggerOnLogin(foundUser);

        const userData = {

            ...foundUser
        };

        sessionStorage.setItem('user', JSON.stringify(userData));
        this.props.history.push('/');
    }

    goToRegister = event => {
        event.preventDefault();
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className={classes.container}>
                <Header />
                <h1>tumblr</h1>
                <form>
                    <div style={myStyles}>
                         <Input onChange={this.setEmail} value={this.state.userCredentials.email}
                           className={classes.inputStyles} type="input" placeholder="Email"/>

                        <Input onChange={this.setPassword} value={this.state.userCredentials.password}
                            className={classes.inputStyles} type="password" placeholder="Password"/>
                        <Button onClick={this.onLoginUser} style={buttonStyles} title="Log in"/>
                        <Button onClick={this.goToRegister} style={buttonStyles} title="New register"/>
                        </div>
                </form>
            </div>);
    }
}

const mapStateToProps = (state) => {

    const { userReducer } = state;
    
    return {

        users: userReducer.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        triggerOnLogin: user => dispatch(onLogin(user))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);