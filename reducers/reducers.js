const initialState = {
  jsonData: {}
}

const filterCustomerData = (state, text) => {
  return state.jsonData.filter( item => {
      return item.customer.name.startsWith(text)
  });
}

export function reducers(state= initialState, action) {
  switch ( action.type ) {
    case 'REFRESH_CUSTOMER_DATA':
    return {jsonData: action.payload.jsonData.queueData.queue.customersToday};
    case 'LOAD_CUSTOMER_DATA':
      return {jsonData: action.payload.jsonData.queueData.queue.customersToday};
    case 'FILTER_CUSTOMERS':
      return {jsonData: filterCustomerData(state, action.payload) };
    default:
      return state;
  }
}