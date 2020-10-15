/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync,onIncrementOwnAsync,fetchData,debounceFetchData  }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <button onClick={onIncrementOwnAsync}>
          Increment 2 times after 3 second , by my own
        </button>
        <button onClick={fetchData}>
       Fetch Data
        </button>

        <button onClick={debounceFetchData}>
     Debounce  Fetch Data
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
