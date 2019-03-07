import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CategoryPage.module.css'

import PostComponent from '../PostComponent/PostComponent'
import { setSelectedCategoryNameAction, onFollowAction, onShareAction, onLikedAction, onReblogAction } from './actions';

class Category extends Component {
    constructor(props) {

        super(props);

        

    }



    componentWillMount() {

        window.c = this;

        const categoryName = this.props.match.params.name;
console.log(1111)

        this.props.dispatchSetSelectedCategoryName(categoryName);
    }

    render() {

        return (

            <div className={classes.container}>

                { this.props.match.params.name }
                <h1 className={classes.titleCategory}>  {this.props.posts[0].category} </h1>
                <div className = {classes.postContainer}>

                    { this.props.posts.map((post, i) => <PostComponent 
                    key={i}
                     propsObj={post}
                      onFollowBtnClick={() => this.props.dispatchOnFollowAction(i)}
                      onShareBtnClick = {() => this.props.dispatchOnShareAction(i)}
                      onLikedBtnClick = {() => this.props.dispatchOnLikedAction (i)}
                      onReblogBtnClick = {() => this.props.dispatchOnReblogAction(i)} /> )}


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { categoryReducer } = state;
    
    const selectedCategoryName =  categoryReducer.selectedCategory;

    return {

        posts: categoryReducer.categories[selectedCategoryName].posts
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
            postIndex: someIndexNumber
        })),
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction ({
            postIndex: someIndex
        })),

        dispatchSetSelectedCategoryName: (name) => dispatch(setSelectedCategoryNameAction(name)),


    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Category)


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