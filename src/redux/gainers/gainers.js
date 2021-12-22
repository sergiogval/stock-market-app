const GET_DATA = 'gainerStore/gainers/GET_DATA';
const apiUrl = 'https://financialmodelingprep.com/api/v3/gainers?apikey=6bc7b2b7bdf6a63adea21f2c3abc9948';
const initialState = [];

const populateState = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getGainers = () => (dispatch) => fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((company) => {
      const newCompany = {
        name: company.companyName,
        currentPrice: company.price,
        ticker: company.ticker,
        difPercentage: company.changesPercentage,
        changes: company.changes,
      };

      dispatch(populateState(newCompany));
    });
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

export default reducer;
