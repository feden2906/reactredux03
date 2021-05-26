import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Posts } from "./redux/componets/Posts";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h5>
            {" "}
            Завдання. Написати редюсери для ресурсів з сайту
            http://jsonplaceholder.typicode.com/
          </h5>
          <hr></hr>
          <br></br>
          <Link to={"/posts"}> posts </Link>
          <br></br>
          <Link to={"/comments"}> comments </Link>
          <br></br>
          <Link to={"/albums"}> albums </Link>
          <br></br>
          <Link to={"/photos"}> photos </Link>
          <br></br>
          <Link to={"/todos"}> todos </Link>
          <br></br>
          <Link to={"/users"}> users </Link>
          <br></br>
          <Switch>
            <Route exact path={"/posts"} render={() => <Posts />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
