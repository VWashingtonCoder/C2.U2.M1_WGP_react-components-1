import React from 'react';
//       ^--- default export!!!
import { render } from 'react-dom';
//       ^--- named export!!!

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/
/**
 * PROPS -> data passed from a parent to a child
 */

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/
import Playground from "./components/Playground";

function App(props) {
  return (
    <>
      <div>
        <p>OH NOES!!!</p>
      </div>
      <div className='container'>
        {/**
         * const divElem = document.createElement('div');
         * divElem.classList.add('container');
         * const myName = `My name is ${name}`;
         */}
        <h1>Welcome to React, Web { props.cohort }</h1>
        <p>Instructor { props.instructor } is teaching { props.numStudents }.</p>
        <p>He is very { props.happiness } because no one bought him chocolate for valentines day.</p>
      </div>
    </>
  )
}

render(
  <Playground name="Casey" />
  ,
  document.querySelector("#root")
)

/**
 * <App 
    cohort="52" 
    instructor={ "Casey" }
    numStudents="67" 
    happiness="sad"
    className="AHHH"
  />
 */
// const props = {
//   cohort: "52",
//   instructor: "Casey",
//   numStudents: "67",
//   happiness: "sad"
// }

// App(props);
