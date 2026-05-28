// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles/index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )






// import React from "react";
// import ReactDOM from "react-dom/client";

// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// import "./styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import { Provider } from "react-redux";
// import { store } from "./app/store";

// import "./styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import { Provider } from "react-redux";
// import { store } from "./redux/store";

// import "./styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/index.css";

import { Provider } from "react-redux";

import { store } from "./app/store";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);