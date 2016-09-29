import { createStore } from 'redux';

const reducer = function(state, action) {
 if (action.type === 'INC') {
   return state + action.payload;
 }

 if (action.type === 'DEC') {
   return state - action.payload;
 }

 return state;
}

const store = createStore(reducer, 1);

store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 6});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'DEC', payload: 5});


// import { combineReducers, createStore } from 'redux';
//
// // it's own file
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'USER_NAME': {
//       state = {...state, name: action.payload};
//       break;
//     }
//     case 'USER_AGE': {
//       state = {...state, age: action.payload};
//       break;
//     }
//   }
//   return state;
// }
//
// // it's own file
// const tweetsReducer = (state = [], action) => {
//   return state;
// }
//
// // it's own file
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// });
//
// const store = createStore(reducers);
//
// store.subscribe(() => {
//   console.log('store changed: ', store.getState())
// });
//
// store.dispatch({type: 'USER_NAME', payload: 'Patricia'});
// store.dispatch({type: 'USER_AGE', payload: 24});
//
// store.dispatch({type: 'USER_NAME', payload: 'Patricia Adamsson'});
// store.dispatch({type: 'USER_AGE', payload: 31});
// store.dispatch({type: 'USER_NAME', payload: 'Patricia Katt'});
