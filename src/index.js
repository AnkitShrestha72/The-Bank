import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";

// store.dispatch({type : "account/deposit" , payload : 5000})
// store.dispatch({type : "account/withdraw" , payload : 2000})
// store.dispatch({ type: "customer/createAccount", payload: {fullname : "Ankit" , nationalId : 12345 , createdAt : new Date().toISOString() } });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
