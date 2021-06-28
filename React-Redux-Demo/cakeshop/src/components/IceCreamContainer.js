import React from 'react'
import {connect} from 'react-redux';
import { buyIceCream } from '../redux'


function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}
//selectors...
//when u want to access the redux state in your component u define mapStateToProps function
//it gets redux state as a parameter which can be used to retrive the appropriate state properties
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//the connect function connect react compoenent to a redux store - here it connects cake compoenent to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);