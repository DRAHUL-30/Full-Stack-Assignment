import "./Navbar.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import login from "./login";
import post from "./post";
import comments from "./comments";

export default function NavApp() {
  return (
    <>
      <Router>
        <Navbar bg="danger" variant="dark">
          <Container>
            <NavLink exact className="login" activeStyle={{ margin: 5 }} to="/">
              login
            </NavLink>
            {/* <NavLink exact activeStyle={{ margin: 5 }} to="/post">
              post
            </NavLink> */}
          </Container>
        </Navbar> 
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/post" component={post} />
          <Route exact path="/post/:id" component={comments} />
          <Route exact path="/login">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
