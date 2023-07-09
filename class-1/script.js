// const newElement = React.createElement(
//   "h1",
//   {
//     className: "classAssignedInReact",
//     id: "idAssignedInReact",
//   },
//   "Hello World!"
// );

// const root = ReactDOM.createRoot(document.getElementById("container"));

// root.render(newElement);

const Heading1 = React.createElement(
  "h1",
  {
    className: "heading1",
  },
  "Hello World!"
);
const Heading2 = React.createElement(
  "h2",
  {
    className: "heading2",
  },
  "Hello World!"
);

const div = React.createElement("div", { className: "divUsingReact" }, [
  Heading1,
  Heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(div);
