import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./style/styles.scss";
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById("app"));

// import { BrowserRouter as Router, Route } from "react-router-dom";

// All route props (match, location and history) are available to User
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }

// ReactDOM.render(
//   (<Router>
//     <Route path="/user/:username" component={User} />
//   </Router>),
//   document.getElementById("app")
// );
console.log(222222);
console.log(222);

console.log(222);