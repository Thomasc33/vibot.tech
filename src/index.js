import App from "./App";
import                         "./index.css";
import ReactDOM           from "react-dom/client";
import allReducers        from "./reducers/index";
import { Provider }       from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = configureStore({reducer: allReducers});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);