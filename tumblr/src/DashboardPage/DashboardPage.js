import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './DashboardPage.module.css'

import PostComponent from '../PostComponent/PostComponent'
import { onFollowAction, onShareAction, onLikedAction, onReblogAction } from './actions';

class Dashboard extends Component {
    constructor(props) {

        super(props);

        this.categoryOptions = ['pets', 'travel', 'sports', 'beauty', 'home'];
        this.selectedCategory = '';
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

    redirectToCategory(event) {
        this.selectedCategory = event.target.value;

        this.props.history.push(`/category/${this.selectedCategory}`)
        console.log(this.selectedCategory);
    }

    render() {

        return (

            <div className={classes.container}>
                <h1 className={classes.titleCategory}> Choose category </h1>
 

                <select onChange={(e) => this.redirectToCategory(e)} value={this.selectedCategory}>
                    {this.categoryOptions.map((option) => <option value={option}>{ option }</option>)}
               </select>
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
        dispatchOnFollowAction: (someIndexNumber) => dispatch(onFollowAction({
            postIndex: someIndexNumber
        })),

        dispatchOnShareAction: (someIndexNumber) => dispatch(onShareAction({
            postIndex: someIndexNumber
        })),
        dispatchOnLikedAction: (someIndexNumber) => dispatch(onLikedAction({
            postIndex:someIndexNumber
        })),
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction ({
            postIndex: someIndex
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