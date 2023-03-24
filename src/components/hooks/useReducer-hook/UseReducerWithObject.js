import React, { useReducer, useState } from "react";

const initialState = {
  todos: [
    {
      text: "",
      completed: false,
    },
  ],
  todoCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    // Update useReducer state by checking the action object (LABEL from input is passed as payload)
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.label, completed: false }],
        todoCount: state.todoCount + 1,
      };

    // Toggle functionality here by checking IDX passed in action & invert the completed property
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.idx ? { ...todo, completed: !todo.completed } : todo
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
};

function UseReducerWithObject() {
  // Initialize the state with object with useReducer
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, initialState);
  // State for displaying and updating the input field value
  const [label, setLabel] = useState("");

  return (
    <div>
      <h2>UseReducer With Object Example</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", label });
          setLabel("");
        }}
      >
        {/* Update the label state through useState */}
        <input value={label} onChange={(e) => setLabel(e.target.value)} />
      </form>

      {/* Display the todos array structure upon entering the input field */}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <div>Number of todos: {todoCount}</div>

      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export default UseReducerWithObject;
