import React, { useReducer } from "react";

const initialState = 0;

// Checks what the action is and based on that, updates the state
const reducer = (state, action) => {
  // current state, action

  // Do not mutate the state directly
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  /**
   * Dispatch - The dispatch method
   *
   * It sends the type of action to the reducer function to perform it's job, which is updating the state
   * The action to be executed is specified in reducer function, which will return the updated state
   *
   * Reducer - The reducer function
   *
   * Describes how your action transfers the state into the next state.
   * Checks which action took place and based on that, action updates the state
   */

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>UseReducer Basics</h2>
      <div>Count = {count}</div>

      <button onClick={() => dispatch("increment")}>Increment </button>
      <button onClick={() => dispatch("decrement")}>Decrement </button>
      <button onClick={() => dispatch("reset")}>Reset </button>
    </div>
  );
}

export default CounterOne;
