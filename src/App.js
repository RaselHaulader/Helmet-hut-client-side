import Home from "./pages/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Purchase from "./pages/Purchase/Purchase";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <Route exact path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route  path="/dashboard">
           <DashBoard></DashBoard>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
