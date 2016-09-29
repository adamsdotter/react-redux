import { applyMiddleware, createStore } from 'redux';

const reducer = (state, action) => {

 return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store changed: ', store.getState())
});

store.dispatch({type: 'FOO'});
