const initialState = {
  customerData: []
}

export function reducers(state= initialState, action) {
  switch ( action.type ) {
    case 'LOAD_CUSTOMER_DATA':
    return {customerData: state.customerData};
  default:
    return state;
  }
}