import ReactDOM from "react-dom";
import { AppProviders } from "providers/AppProviders";
import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/main.scss";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

serviceWorker.unregister();
