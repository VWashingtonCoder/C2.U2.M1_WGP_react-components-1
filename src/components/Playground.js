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

/**
 * In JSX:
 * No 1: can't use if / else -> only ternary
 * No 2: can't use a for loop -> must use forEach filter map reduce find
 */


function Playground(props) {
  const [count, setCount] = useState(0);
  //     var     update
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState("scissors");
  const [choice, setChoice] = useState([]);

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

  const updateWeapon = (newWeapon) => {
    const weapons = ["scissors", "rock", "paper"];
    const rand = Math.floor(Math.random() * 3);
    setWeapon(weapons[rand]);
  }
  
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <h1>The count is: { count }</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setSpinnerOn(true)}>Turn the spinner ON!!</button>
      <h3>The currently selected weapon is: { weapon.toUpperCase() }</h3>
      <button onClick={() => setWeapon("scissors")}>Pick scissors!!</button>
      <button onClick={() => setWeapon("rock")}>Pick rock!!</button>
      <button onClick={() => setWeapon("paper")}>Pick paper!!</button>
    </div>
  )
}

export default Playground;