import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const initialState = {
  fetiching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      return {...state, fetiching: true};
      break;
    }
    case 'RECEIVED_USERS': {
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

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store changed: ', store.getState())
});

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_USERS_START'});
  axios.get('http://rest.learncode.academy/api/wstern/users')
    .then((response) => {
      dispatch({type: 'RECEIVED_USERS', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_USERS_REJECTED', payload: err});
    });
});
