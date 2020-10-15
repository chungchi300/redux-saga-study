import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      fetchData={() => store.dispatch({type:'FETCH_REQUEST',payload:{url:'www.google.com',method:'POST'}})}

      debounceFetchData={() => store.dispatch({type:'DEBOUNCE_FETCH_REQUEST',payload:{url:'www.google.com',method:'POST'}})}

      onIncrementOwnAsync={() => action('INCREMENT_OWN_ASYNC')}       onIncrementAsync={() => action('INCREMENT_ASYNC')}  />,

    document.getElementById('root')
  )
}

render()
store.subscribe(render)
