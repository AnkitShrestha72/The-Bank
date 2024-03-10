

const initialStateCustomer = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};


export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullname: action.payload,
      };
    default:
      return state;
  }
}



export function createAccount(fullname, nationalId) {
  return {
    type: "customer/createAccount",
    payload: {
      fullname,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateName(fullname) {
  return {
    type: "customer/updateName",
    payload: {
      fullname,
    },
  };
}
