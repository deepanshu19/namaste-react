import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object =>HTMLElement(render)

/* const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading); */

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => Babels transpile it to React.createElement => ReactElement-JS Object =>HTMLElement(render)

const elem = <span>React Element</span>;

const Title = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Class based component - OLD
// functional component - New

// React Functional Component
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
