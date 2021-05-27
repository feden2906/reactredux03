import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Posts } from "./componets/Posts";
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
          <hr/>
          <br/>
          <Link to={"/posts"}> posts </Link>
          <br/>
          <Link to={"/comments"}> comments </Link>
          <br/>
          <Link to={"/albums"}> albums </Link>
          <br/>
          <Link to={"/photos"}> photos </Link>
          <br/>
          <Link to={"/todos"}> todos </Link>
          <br/>
          <Link to={"/users"}> users </Link>
          <br/>
          <Switch>
            <Route exact path={"/posts"} render={() => <Posts/>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
