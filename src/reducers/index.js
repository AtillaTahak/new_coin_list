const INITAL_STATE = {
    coins:[],
    message:''
}

export const reducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'GET_COİNS_SUCCESS':
            return { ...state, coins: action.payload }
            break;
        case 'GET_COİNS_ERROR':
            return { ...state, message:action.payload }
            break;
        default:
            break;
    }
    return state;
}