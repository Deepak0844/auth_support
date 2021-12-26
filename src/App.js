import "./App.css";
import { PasswordVerify } from "./resetPassword";
import { Switch, Route,Redirect } from "react-router-dom";
import { Activate } from "./Activate";
import {PassChanged} from './passwordChanged';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
home
        </Route>
        <Route
          exact
          path="/forgot-password/verify/:token"
          component={PasswordVerify}
        />
        <Route exact path="/accountverification/:token" component={Activate} />
        <Route exact path="/passwordchangedsuccessfully" component={PassChanged} />
      </Switch>
    
    </div>
  );
}

export default App;
