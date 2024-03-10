import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {

    createAccount: {
      prepare(fullname, nationalId) {
        return {
          payload: {
            fullname,
            nationalId,
            createdAt: new Date().toISOString(),
          }
        }
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      }
    },
    updateName(state, action) {
      state.fullname = action.payload;
    },
  },
});


export const { createAccount , updateName } = customerSlice.actions;
export default customerSlice.reducer;