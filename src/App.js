import Home from "./pages/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Purchase from "./pages/Purchase/Purchase";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div >
      <AuthProvider>
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
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
