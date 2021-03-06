import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Register } from "./pages/Register";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/list" component={List} />
    </Switch>
  );
}
