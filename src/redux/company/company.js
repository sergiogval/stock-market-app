const GET_COMANY = 'companyStore/company/company/GET_COMANY';
const apiUrl = 'https://financialmodelingprep.com/api/v3/profile';
const initialState = {};

const addCompany = (payload) => ({
  type: GET_COMANY,
  payload,
});

export const getCompany = (payload) => (dispatch) => fetch(`${apiUrl}/${payload}?apikey=5e87fe6c4fd732f68a02d0cb98866397`)
.then((response) => response.json())
.then((data) => {
  data.forEach(company => {
    const newCompany = {
      name: company.companyName,
      describtion: company.description,
      image: company.image,
      ipoDate: company.ipoDate,
      changes: company.changes,
      symbol: company.symbol,
      stockPrice: company.price,
    };
    dispatch(addCompany(newCompany));
  });
});

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_COMANY:
      return action.payload
    default:
      return state;
  };
};

export default reducer;
