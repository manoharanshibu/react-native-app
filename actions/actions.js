import {apiPostItems, apiGetItems} from '../services/api';


const url = 'https://app.qudini.com/api/queue/gj9fs?username=codetest1&password=codetest100';

export const loadCustomerData = (state) => {
    
    // async () => {
        // dispatch("LOADED");
       try {
           // const res = await apiGetItems(url, '');
           return {
                type: "LOAD_CUSTOMER_DATA",
                payload: state
            }
           
       } catch (e) {
           // dispatch("ERROR")
       }
}

export const filterCustomers = (state) => {
    return {
        type: "FILTER_CUSTOMERS",
        payload: state
    }
}