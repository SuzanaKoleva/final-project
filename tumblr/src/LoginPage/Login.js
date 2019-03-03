import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { onLogin } from '../Users/actions/users';
import { connect } from 'react-redux';

// const onLogin = props => {
//     sessionStorage.setItem('user', 'gosho');
//     //user logged succesfully
//     props.history.replace('/');
// }
// const register = props => {
//     props.history.replace('/register');
// }


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
let loggedUser = null;

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

    setPassword = event => {
        const value = event.target.value;
        const findUser = {...this.state.findUser};
        findUser.password = value;
        this.setState({ findUser });
    }
    
    onLogin = (email, password) => {
        if(localStorage.getItem('findUser') !== null){
            findUser = JSON.parse(localStorage.getItem('findUser'));
            sessionStorage.setItem('users', JSON.stringify(findUser));
            loggedUser = findUser;
            this.props.history.replace('/');
        }
        const findUser = { email: '', password: ''};
        this.setState({ findUser });
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
                        <Button onClick={this.onLogin} style={inputStyles} title="Log in"/>
                        <Button onClick={this.goToRegister} style={inputStyles} title="New register"/>
                        </div>
                </form>
            </div>);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(onLogin(email, password))
    }
} 

// const login = props => {    
//     return (
//     <div>
//         <h1>tumblr</h1>
//         <form>
//             <div style={myStyles}>
//                 <Input style={inputStyles} type="input" placeholder="Email"/>
//                 <Input style={inputStyles} type="password" placeholder="Password"/>
//                 <Button onClick={() => onLogin(props)}style={inputStyles} title="Log in"/>
//                 <Button onClick={() => register(props)}style={inputStyles} title="New register"/>
//                 </div>
//         </form>
//     </div>);
// }

// export default login;

export default connect(null, mapDispatchToProps)(Login);