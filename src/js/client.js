import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
  fetiching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      return {...state, fetiching: true};
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetiching: false,
        fetched: true,
        users: action.payload
      };
      break;
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        fetiching: false,
        error: action.payload
      };
      break;
    }
  }
 return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store changed: ', store.getState())
});

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});
