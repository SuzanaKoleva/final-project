import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import { addNewCategory } from './actions';
import { connect } from 'react-redux';
import classes from './chooseFavCat.module.css';

// const CategoryTemplate = props => (
//     <section>
//         <h1>{props.propsObj.titile}</h1>
//         <img src={props.propsObj.image} />
//         <p>{props.propsObj.followers}</p>
//     </section>
// )

class Categories extends Component {
    render() {
        return (
            <section className={classes.catContainer}>
                <div className={classes.catDiv}>
                    <h1>{this.props.title}</h1>
                    <img className={classes.imageContainer} src={this.props.image} />
                    <p>{this.props.followers}</p>
                    <Button onClick={() => this.props.addNewCategory(this.props.id)} title="Add this category"/>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewCategory: id => dispatch(addNewCategory(id))
    }
}

   
export default connect(null, mapDispatchToProps)(Categories);