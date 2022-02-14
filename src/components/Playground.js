import React, { useState } from "react";
/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// STATE IS IMMUTABLE -> it CAN NOT CHANGE
// useState => creates a new version of state
// NEVER, EVER, EVER, EVER, EVER MUTATE STATE DIRECTLY


function Playground(props) {
  const [count, setCount] = useState(0);
  //     var     update
  const [spinnerOn, setSpinnerOn] = useState(false);
  
  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is { spinnerOn ? "ON" : "OFF" }</h3>
        <button 
          onClick={() => setSpinnerOn(false)}
        >Turn that darn spinner off</button>
      </div>
    )
  }
  
  return (
    <div className="container">
      <h1>The count is: { count }</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setSpinnerOn(true)}>Turn the spinner ON!!</button>
    </div>
  )
}

export default Playground;