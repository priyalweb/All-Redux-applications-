const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger()

//ACTIONS
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action is an object with a type property
//action creator is a function that returns an action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action',
    }
}

// (previousState, action) => newState

//State of our application, we need a store to ..store that!
const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            //by spread operator we're making copy of the initial state object, and then we would only update the no. of cakes, and the other property remains unchanged
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            //by spread operator we're making copy of the initial state object, and then we would only update the no. of cakes, and the other property remains unchanged
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

//this is where we are creating a redux store.
//the store accepts an argument reducer, which control how the state transitions happen
const store = createStore(rootReducer, applyMiddleware(logger));
//once store is created, this logs the initial state, by getting the state we defined earlier 
console.log('Initial State', store.getState())

//Set up listener to the store, everytime the store updates we log the state to console
const unsubscribe = store.subscribe(() => {})

// when we first dispatch the action, the reducer sees that the action type is BUY_CAKE
//it will then try to match the type with the switch cases, 
// and returns the new state (by reducing the num of cakes)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
//we simply unsubscribe to any changes in the store
unsubscribe()


