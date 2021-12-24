const GET_DATA = 'allstocksStore/allstocks/GET_DATA';
const apiUrl = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=6bc7b2b7bdf6a63adea21f2c3abc9948';
const initialState = [];

const populateState = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getAll = () => (dispatch) => fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    dispatch(populateState(data.slice(0, 1000)));
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
