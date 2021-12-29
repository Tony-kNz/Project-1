import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

// pages
import { Landing, Contact, Project, Projects } from "./pages";

// layout
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
