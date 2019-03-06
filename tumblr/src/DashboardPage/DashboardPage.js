import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './DashboardPage.module.css'

import PostComponent from '../PostComponent/PostComponent'
import { onFollow } from './actions';

class Dashboard extends Component {
    constructor(props) {

        super(props);

    }


    // state = {
    //     propsObj: {
    //         userImgSrc: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
    //         userName: 'mocked name',

    //         title: 'mockedTitle',
    //         imgSrc: 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
    //         discription: 'discrioption',

    //         category: 'mocked category'

    //     }
    //}

    componentDidMount() {

        window.d = this;
    }

    render() {

        return (

            <div className={classes.container}>
                <h1 className={classes.titleCategory}>  {this.props.posts[0].category} </h1>
                <div className = {classes.postContainer}>

                    { this.props.posts.map((post, i) => <PostComponent key={i} propsObj={post} onFollow={() => this.props.onFollow(i)} /> )}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { dashboardReducer } = state;
    console.log(222, dashboardReducer.posts)    
    return {

        posts: dashboardReducer.posts
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onFollow: (postIndex) => dispatch(onFollow({
            postIndex
        }))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


// (<section>
//     <header>
//         <img src={props.propsObj.userImgSrc} />
//         <p>{props.propsObj.userName}</p>
//         <button onClick={ props.propsObj.onFollowUser}>Follow</button>
//     </header>
//     <main>
//         <h1>{props.propsObj.title}</h1>
//         {props.propsObj.imgSrc ?
//             (<img src={props.propsObj.imgSrc} />)
//             : null}
//         <p> {props.propsObj.discription}</p>
//     </main>
//     <footer>

//         <div>
//             # tags
//         </div>
//         <div>
//             buttons
//         </div>

//     </footer>

// </section>)