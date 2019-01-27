

const IP_PORT_ADDRESS = '192.168.1.2:3000';

export const loadCustomerData = (state) => {

    return dispatch => {        
        return fetch(`http://${IP_PORT_ADDRESS}/api/getcustomers`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {
                dispatch({
                    type: "LOAD_CUSTOMER_DATA",
                    payload: json
                })
            })
    }
}

export const filterCustomers = (state) => {
    return {
        type: "FILTER_CUSTOMERS",
        payload: state
    }
}

export const refreshCustomerData = (state) => {
    return dispatch => {        
        return fetch(`http://${IP_PORT_ADDRESS}/api/getcustomers`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {
                dispatch({
                    type: "REFRESH_CUSTOMER_DATA",
                    payload: json
                })
            })
    }
}