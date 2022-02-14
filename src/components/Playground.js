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
  
  return (
    <div>
      <h1>PLAYGROUND { name }</h1>
    </div>
  )
}

export default Playground;