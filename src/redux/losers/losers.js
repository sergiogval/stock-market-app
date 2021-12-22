const GET_DATA = 'loserStore/losers/GET_DATA';
const apiUrl = 'https://financialmodelingprep.com/api/v3/losers?apikey=d2e40ce5ce94299d6d3d24b21e4d4696';
const initialState = [];

const populateState = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getLosers = () => (dispatch) => fetch(apiUrl)
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