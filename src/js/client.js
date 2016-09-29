import { combineReducers, createStore } from 'redux';

// it's own file
const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'USER_NAME': {
      state = {...state, name: action.payload};
      break;
    }
    case 'USER_AGE': {
      state = {...state, age: action.payload};
      break;
    }
  }
  return state;
}

// it's own file
const tweetsReducer = (state = [], action) => {
  return state;
}

// it's own file
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed: ', store.getState())
});

store.dispatch({type: 'USER_NAME', payload: 'Patricia'});
store.dispatch({type: 'USER_AGE', payload: 24});

store.dispatch({type: 'USER_NAME', payload: 'Patricia Adamsson'});
store.dispatch({type: 'USER_AGE', payload: 31});
store.dispatch({type: 'USER_NAME', payload: 'Patricia Katt'});
