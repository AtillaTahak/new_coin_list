import axios from "axios";

export const getCoins =()=> dispatch => {
    axios
    .get("https://api.coinpaprika.com/v1/coins/")
    .then(response => dispatch({type:'GET_COİNS_SUCCESS',payload:response.data}))
    .catch(error => dispatch({type:'GET_COİNS_ERROR',payload:error}));
}