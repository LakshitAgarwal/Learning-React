// As we have now removed the cdn linkes, we need to import react and reactdom from node_modules.

import React from "react";
import ReactDOM from "react-dom/client";

// CODE WITHOUT KEYS !!

// const listItem1 = React.createElement("li", {}, "Home");
// const listItem2 = React.createElement("li", {}, "About Us");
// const listItem3 = React.createElement("li", {}, "Support");

// const list = React.createElement("ul", {}, [listItem1, listItem2, listItem3]);

// const heading = React.createElement("h1", {}, "Namaste Everyone!");

// const contain = React.createElement(
//   "div",
//   {
//     id: "baapdiv",
//   },
//   [heading, list]
// );

// const rootContainer = ReactDOM.createRoot(document.getElementById("container"));

// rootContainer.render(contain);

// This code solely is goving some error in the console whoch isn't causing any harm to rendering of the code but in heavy projects this might create some problem.
// The error says that every Element created must have some unique key, so that when any piece of code gets repeated then react doesn't waste time in rendering it twice.

// It is done properly like this -->
// CODE WITH KEYS !!

const listItem1 = React.createElement("li", { key: "anything" }, "Home");
const listItem2 = React.createElement("li", { key: "random" }, "About Us");
const listItem3 = React.createElement("li", { key: "you" }, "Support");

const list = React.createElement("ul", { key: "like" }, [
  listItem1,
  listItem2,
  listItem3,
]);

const heading = React.createElement(
  "h1",
  { key: "canBe" },
  "Namaste Everyone!"
);

const contain = React.createElement(
  "div",
  {
    id: "baapdiv",
    key: "literallyAnything",
  },
  [heading, list]
);

const rootContainer = ReactDOM.createRoot(document.getElementById("container"));

rootContainer.render(contain);

// Now this gives a clean console.
