import "./App.css";
import { PasswordVerify } from "./resetPassword";
import { Switch, Route } from "react-router-dom";
import { Activate } from "./Activate";
import {PassChanged} from './passwordChanged';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">hello</Route>
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
