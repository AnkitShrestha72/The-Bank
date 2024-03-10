// This is a AccountSlice file of redux tool kit and also you can use anoter AccountSlice file for redux tool kit 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name : "account",
  initialState,
  reducers: {
    deposit(state, action)  {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action)  {
      state.balance -= action.payload;
    },

    // if there are multiple arguments of actions then we need to use prepare function and wrap state and action in a reducer function
    requestLoan: {
      prepare(amount,purpose) {
        return {
          payload: {
            amount,
            purpose
          }
        }
      },

     reducer(state, action) {
      if (state.loan > 0) return;
      state.balance += action.payload.amount;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
     }
    },
    payLoan (state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency: (state, action) => {
      state.isLoading = true;
    },
  }
})

export const {  withdraw, requestLoan, payLoan} = accountSlice.actions;

//NOTE : this is not a react tool kit way to use thunk but you can also use this way :)

export function deposit(amount, currency, isLoading) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  // middleware thunk
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    // Api Call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    // return action
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;
