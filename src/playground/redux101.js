import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { setCount } ) => ({
    type: 'SET',
    setCount
});
const resetCount = () => ({
    type: 'RESET'
});

// Reducer
// Reducers are pure functions 
// 1. output is completely determined by an input
const countReducer = (state = { count: 0}, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            if(!action.setCount) return 'SET has to have a value';
            return {
                count: action.setCount
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe( ()=> {

    console.log(store.getState());
})

// Actions - is an object that gets sent to the store


store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(decrementCount());

store.dispatch(setCount({ setCount: -100 }));
// store.dispatch(setCount({}));
store.dispatch(resetCount());

// Reset count to 0
