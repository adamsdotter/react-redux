import { applyMiddleware, createStore } from 'redux';

const reducer = function(state, action) {
 if (action.type === 'INC') {
   return state + action.payload;
 } else if (action.type === 'DEC') {
   return state - action.payload;
 } else if (action.type === 'E') {
   throw new Error('This is an error!');
 }

 return state;
}

// it's own file
const logger = (store) => (next) => (action) => {
  console.log('-> action fired!', action);
  next(action);
}

// it's own file
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('______ERROR!', e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log('store changed: ', store.getState())
});

store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 6});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'DEC', payload: 5});
store.dispatch({type: 'E'});


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
