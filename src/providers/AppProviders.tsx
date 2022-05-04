import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AppProvidersProps } from "./AppProviders.types";
import { store } from "redux/store/store";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);
