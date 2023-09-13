import React from "react";
import ReactDOM from "react-dom/client";

// This is JSX Code:
const heading = <h1 className="title">hello world</h1>;

const root = ReactDOM.createRoot(document.getElementById("container"));
// A react element is rendered like this:
// root.render(heading);

// Functional Component:

const Title = function () {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
      consequuntur.
    </p>
  );
};

const HeaderComponent = () => {
  return (
    <React.Fragment>
      {/* like this we can use ReactElement inside Functional Component.  */}
      {heading}
      <h2>Namaste Everyone!</h2>
      <h2 id="functComp">Hey! This is a functional component</h2>
      {/* Like this we can use functional Component inside another functional Component */}
      {Title()}
      {/* We can also do it like this: <Title /> */}
    </React.Fragment>
  );
};
// Functional component is rendered like this:
root.render(<HeaderComponent />);
