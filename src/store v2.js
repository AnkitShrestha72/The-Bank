import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// to use thunk you should import thunk and apply middleware and give another argument to the creatStore function


// To use redux toolkit you need to install package called npm install @reduxjs/toolkit 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
