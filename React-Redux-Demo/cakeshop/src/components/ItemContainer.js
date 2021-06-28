import React from 'react';
import {connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';


//we want to display either the no. of cakes or the no of icecream based on the props passed
//so this compoenent can be used by cakes or icecreams
function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

//props of the function itself: what it means?
//i know u want to map the state to props but this compoent has its own props, if u want to make use of it
//then go ahead baby
//we are going to conditionally assign the redux state here
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
export default connect(null, mapDispatchToProps)(ItemContainer);