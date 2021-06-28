import React, {useState } from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux'


function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}
//selectors...
//when u want to access the redux state in your component u define mapStateToProps function
//it gets redux state as a parameter which can be used to retrive the appropriate state properties
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

//the connect function connect react compoenent to a redux store - here it connects cake compoenent to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);