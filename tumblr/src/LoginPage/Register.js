import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { addNewUser, setUsersList } from '../Users/actions/actions';
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


class Register extends React.Component{

    state = {

        availableAvatars: [
            'http://admission.igntuonline.in/dist/img/UserImage.jpg',
            'https://iboostlol.com/boostpanel/assets/img/avatars/0.png',
            'https://www.infrascan.net/demo/assets/img/avatar5.png',
            'https://amploprod.s3.amazonaws.com/assets/no-user-image-square-9f6a473a32ad639f619216331d10d61ce1b35c9271d5683920960e1a5ee45bb8.jpg',
            'http://www.harrisonscave.com/public/img/frontend/user.png'
        ],
        defaultValues: {
            username: '',
            email: '',
            password: '',
            id: 0,
            profileImg: '',
            likedPosts: {},

            // TODO: to be deleted
            // followed: [],
            // categories: [],
            // posts: []
        },

        newUser: {
            username: '',
            email: '',
            password: '',
            id: 0,
            profileImg: '',
            likedPosts: {},



            // TODO: to be deleted
            // followed: [],
            // categories: [],
            // posts: [],

        },
    }

    componentDidMount() {
        
        window.r = this;
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
            
            this.props.addNewUser(this.state.newUser);
            console.log(this.props);

            const updatedUsersList = [...this.props.users];

            const lastUserdId = this.props.users[this.props.users.length - 1].id;

            const randomAvatarIndex = Math.floor(Math.random() * this.state.availableAvatars.length);

            updatedUsersList.push({
                ...this.state.newUser,
                id: lastUserdId + 1,
                profileImg: this.state.availableAvatars[randomAvatarIndex]
            });

            this.props.triggerSetUsersList(updatedUsersList);

             

            this.setState({ newUser: {
                ...this.state.defaultValues
            }});

            this.props.history.push('/login');
            console.log('uspeh');   
        }else{
            console.log('grehska');
        }
    }

    render() {
        return (
            <div className={classes.container}>
                <Header />
                <h1>New registration in <strong>tumblr</strong></h1>
                <form className={classes.formContainer}>
                    <div style={myStyles}>
                        <Input onChange={this.setUsername} value={this.state.newUser.username}
                            className={classes.inputStyles} type="text" placeholder="Username"/>

                        <Input onChange={this.setEmail} value={this.state.newUser.email}
                           className={classes.inputStyles} type="input" placeholder="Email"/>

                        <Input onChange={this.setPassword} value={this.state.newUser.password}
                            className={classes.inputStyles} type="password" placeholder="Password"/>

                        <Button style={buttonStyles} className={classes.buttonStyles} onClick={this.addNewUser} title="Sign up"/>
                        </div>    
                </form>
            </div>);
    }
}
const mapStateToProps = state => {

    const { userReducer } = state;
    
    return {
        users: userReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: newUser => dispatch(addNewUser(newUser)),
        triggerSetUsersList: (users) => dispatch(setUsersList(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);