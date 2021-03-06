import { Redirect, Route, Switch } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";
import { Home, Products, Login } from "pages";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.Home} exact component={Home} />
      <Route path={AppRoute.Products} component={Products} />
      <Route path={AppRoute.Login} component={Login} />

      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
